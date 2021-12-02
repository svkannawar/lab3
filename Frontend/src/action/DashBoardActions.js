import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import BACKEND_URL from "../config/configBackendURL";

const accessToken = localStorage.getItem("accessToken");
export const restlistforsearch = createAsyncThunk(
    'users/restlistforsearch',
    async (body)=>{

       // console.log("inside restlistsearch of DasBoardActions")
        const response = await axios({
            method: "post",
            url: BACKEND_URL + "/restaurants/search",
            data: body,
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          })
            
            return {auth : true, restList: response.data}         
         
    })

    export const restlistfordashue = createAsyncThunk(
        'users/restlistfordashue',
        async (body)=>{
           const accessToken = localStorage.getItem("accessToken");
         
            const response = await axios.get(BACKEND_URL + "/restaurants", { headers: { 'Authorization': `Bearer ${accessToken}` } });
           // console.log("inside restlistfordashue of DasBoardActions", response)
    
                
                return {auth : true, restList: response.data}
               
             
        })

    // export const restlistfordashue = createAsyncThunk(
    //     'users/restlistfordashue',
    //     async (body)=>{
    //         const response = await axios.post(BACKEND_URL + "/displayAllRest", body)
                 
    //             return {auth : true, restList: response.data}
                          
    //     })


        export const restaurantlistfilter= createAsyncThunk(
            'users/restaurantlistfilter',
            async (body)=>{
                const response = await axios({
                    method: "post",
                    url: BACKEND_URL + "/restaurants/filter",
                    data: body,
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${accessToken}`,
                    },
                  })
                  return {auth : true, restList: response.data}

            }

        )
    
        export const searcByhModeOfDeliveryOnly = createAsyncThunk(
            'users/searcByhModeOfDeliveryOnly',
            async (body)=>{
              //  console.log("inside searcByhModeOfDeliveryOnly of DasBoardActions")
                const response = await axios.post(BACKEND_URL + "/searcByhModeOfDeliveryOnly", body)
                return {auth : true, restList: response.data}

            }
        )