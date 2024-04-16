import axios from 'axios';
import { Observable } from 'rxjs';

// const api = axios.create({ baseURL: "http://localhost:8000/api/v1" })
// export default api;

const getHeaders = () => {
   const userToken = localStorage.getItem("userToken");

   let headers = {};

   // headers = { Authorization: 'Bearer ' + userToken };
   if (userToken !== null) {
      headers = { Authorization: 'Bearer ' + userToken };
   } else {
      console.log("token is not found")
   }

   return headers;
}

const post = (url, paramsObj) => {
   console.log("url :", url)
   console.log("paramsObj :", paramsObj)
   const headers = getHeaders()
   try {
      return new Observable((observer) => {
         const params = { ...paramsObj };
         // console.log("url :", url)
         // console.log("paramsObj :", paramsObj)
         // console.log("headers :", headers)
         // params['AppCode'] = '1';
         // params['SelectedLanguage'] = selectedLanguage.toLowerCase();
         axios.post(url, params, { headers })
            .then((response) => {
               observer.next(response.data);
               console.log(response.data)
               observer.complete();
            })
            .catch((error) => {
               if (axios.isCancel(error)) {
                  observer.next(error.message);
                  observer.complete();
                  console.log('Request cancelled:', error.message);
               } else if (error.response && error.response.status === 401) {
                  observer.next(error.message);
                  observer.complete();
               } else {
                  observer.error(error)
                  observer.complete();
               }
               // if (error && error.response && error.response.status === 401) {
               //    refreshToken('post', url, params).subscribe(
               //       res => {
               //          observer.next(res);
               //          observer.complete();
               //       }, err => {
               //          observer.error(err);
               //          observer.complete();
               //       }
               //    )
               // } else {
               //    observer.error(error);
               //    observer.complete();
               // }
            }
            )
      })
   } catch (err) {
      console.log('catch err', err);
   }
};

const get = (url, paramsObj, cancelToken) => {
   const headers = getHeaders()
   try {
      return new Observable((observer) => {
         const params = { ...paramsObj };
         //   params['AppCode'] = '1';
         //   params['SelectedLanguage'] = selectedLanguage.toLowerCase();
         const _params = cancelToken ? { params, headers, cancelToken: cancelToken } : { params, headers };
         // console.log("_params :", _params)
         // console.log("neturl:",url)
         // console.log("token:",_params)
         axios.get(url, _params)
            .then((response) => {
               observer.next(response.data);
               observer.complete();
            })
            .catch((error) => {
               if (axios.isCancel(error)) {
                  observer.next(error.message);
                  observer.complete();
                  console.log('Request canceled:', error.message);
               } else if (error.response && error.response.status === 401) {
                  console.log('Unauthorized:', error.response.data);
                  observer.error(error);
                  observer.complete();
               } else {
                  console.log('Axios Error:', error);
                  observer.error(error);
                  observer.complete();

                  // if (error && error.response && error.response.status === 401) {
                  //      refreshToken('get', url, params).subscribe(
                  //          res => {
                  //              observer.next(res);
                  //              observer.complete();
                  //          }, err => {
                  //              observer.error(err);
                  //              observer.complete();
                  //          }
                  //      )
                  //    console.log("Axios Error - ", error)
                  // } else {
                  //    observer.error(error);
                  //    observer.complete();
               }
            }
            )
      })
   } catch (err) {
      console.log('catch err', err);
   }
}

const put = (url, paramsObj) => {
   const headers = getHeaders()
   try {
      return new Observable((observer) => {
         const params = { ...paramsObj };
         // console.log("url :", url)
         // console.log("paramsObj :", paramsObj)
         // console.log("headers :", headers)
         // params['AppCode'] = '1';
         // params['SelectedLanguage'] = selectedLanguage.toLowerCase();
         axios.put(url, params, { headers })
            .then((response) => {
               observer.next(response);
               observer.complete();
            })
            .catch((error) => {
               if (axios.isCancel(error)) {
                  observer.next(error.message);
                  observer.complete();
                  console.log('Request canceled:', error.message);
               } else if (error.response && error.response.status === 401) {
                  console.log('Unauthorized:', error.response.data);
                  observer.error(error);
                  observer.complete();
               } else {
                  console.log('Axios Error:', error);
                  observer.error(error);
                  observer.complete();
               }
               //    if (error && error.response && error.response.status === 401) {
               //       refreshToken('put', url, params).subscribe(
               //           res => {
               //               observer.next(res);
               //               observer.complete();
               //           }, err => {
               //               observer.error(err);
               //               observer.complete();
               //           }
               //       )
               //   } else {
               //       observer.error(error);
               //       observer.complete();
               //   }
            })
      });
   } catch (err) {
      console.log('catch err', err);
   }
}

const deleteApi = (url, paramsObj) => {
   const headers = getHeaders()
   try {
      return new Observable((observer) => {
         const params = { ...paramsObj };
         // params['AppCode'] = '1';
         // params['SelectedLanguage'] = selectedLanguage.toLowerCase();
         axios.delete(url, { params, headers })
            .then((response) => {
               observer.next(response.data);
               observer.complete();
            }).catch((error) => {
               if (axios.isCancel(error)) {
                  observer.next(error.message);
                  observer.complete();
                  console.log('Request canceled:', error.message);
               } else if (error.response && error.response.status === 401) {
                  console.log('Unauthorized:', error.response.data);
                  observer.error(error);
                  observer.complete();
               } else {
                  console.log('Axios Error:', error);
                  observer.error(error);
                  observer.complete();
               }
               // if (error && error.response && error.response.status === 401) {
               //    refreshToken('delete', url, params).subscribe(
               //       res => {
               //          observer.next(res);
               //          observer.complete();
               //       }, err => {
               //          observer.error(err);
               //          observer.complete();
               //       }
               //    )
               // } else {
               //    observer.error(error);
               //    observer.complete();
               // }
            }
            )
      });
   } catch (err) {
      console.log('catch err', err)
   }
}


export const API = {
   post,
   get,
   put,
   deleteApi
};