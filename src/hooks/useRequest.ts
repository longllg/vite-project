import merge from "lodash/merge";
import { useState, useEffect, useCallback } from "react";

interface RequestOptions {
  manual?: boolean; // 是否首次执行
  formateResult?: (data: any) => { data: any }; // 格式化返回的数据
  params?: { [key: string]: any }; // 请求参数
}

type ServierProps = (data?: any) => Promise<any>;
interface ResultProps<Data> {
  data: Data; // 这是返回的数据
  loading: boolean; // loading状态
  params: any; // 请求参数
  run: (data?: any) => Promise<{ [key: string]: any }>; //请求的方法
  error: any; // 错误信息
}

function useRequest<Data>(
  server: ServierProps, // 需要请求的异步接口
  optionsParams?: RequestOptions // 传递的参数
): ResultProps<Data> {
  const options = merge<RequestOptions, RequestOptions>(
    {},
    optionsParams || {}
  );
  const { manual = true, formateResult, params } = options;
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<any>(null);
  const run = useCallback(
    (p?: { [key: string]: any }): Promise<{ data: Data | any }> => {
      setLoading(true);
      let requestParams = { ...params, ...p };
      return new Promise((resolve, reject) => {
        server(requestParams)
          .then((res) => {
            let data = res.data?.data;
            if (formateResult) {
              data = formateResult(res.data.data);
            }
            setData(data);
            setLoading(false);
            resolve(data);
          })
          .catch((err) => {
            setLoading(false);
            reject(err);
            setError(err);
          });
      });
    },
    [formateResult, params, server]
  );

  useEffect(() => {
    if (!manual) {
      run(params);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    loading,
    run,
    params,
    error: error,
  };
}

export default useRequest;
