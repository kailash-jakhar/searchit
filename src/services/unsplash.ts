import axios, {  CancelToken, AxiosRequestConfig } from 'axios';
const ACCESS_KEY = "r7nHg7DUZgUUuilx3NUxkFZaY-GHrW1gTZwJlSqKSac";
const BASE_URL  = "https://api.unsplash.com/";
const DATA_PER_PAGE = 12;
const config = {
    headers : {
        'Authorization' : "Client-ID "+ACCESS_KEY
    }
};

interface RequestParams {
    query?:string
    pageNumber?:number
}



export const getAxiosConfig = (cancelToken?:CancelToken) => {
    if(cancelToken) {
        return {...config,cancelToken}; 
    }
    return config;
}


export const getPhotos =(reqData:RequestParams,cancelToken?:CancelToken) => {
    const axiosConfig = getAxiosConfig(cancelToken);
    const {query,pageNumber} = reqData
    const queryParams = new  URLSearchParams();
    queryParams.append('per_page',DATA_PER_PAGE.toString())
    if(query){
        queryParams.append('query',query)
    }
    if(pageNumber) {
        queryParams.append('pageNumber',pageNumber.toString())
    }

    const baseUrl = query? `${BASE_URL}search/` : BASE_URL;
    
    let URL = `${baseUrl}photos?${queryParams.toString()}`      
    return  axios.get(URL,axiosConfig).then(res => {
        return query? res.data.results: res.data;
    });
}

export const getRandomPhoto = (cancelToken?:CancelToken) => {
    const axiosConfig = getAxiosConfig(cancelToken);
    let URL = BASE_URL+"photos/random?orientation=landscape";
    return axios.get(URL,axiosConfig);
}


export const getPhotoById = (photoId:string,cancelToken?:CancelToken) =>{
    const axiosConfig = getAxiosConfig(cancelToken);
    let URL = BASE_URL+"/photos/"+photoId;
    return axios.get(URL,axiosConfig);
}

export const downloadImageByURL = (URL:string,cancelToken:CancelToken) => {
    const axiosConfig = getAxiosConfig(cancelToken);
    const downloadConfig = {...axiosConfig, responseType: 'blob'} as AxiosRequestConfig;
    return axios.get(URL,downloadConfig);
}
