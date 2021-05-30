import React from "react";
import "./Quiz.css";
import { useState } from "react";
import axios from 'axios';
export const Quiz = () => {

  const [spotify, setSpotify] = useState({playlists:{href:"https://api.spotify.com/v1/search?query=Good+mood&type=playlist&market=US&offset=0&limit=20",items:[{collaborative:false,description:"",external_urls:{spotify:"https://open.spotify.com/playlist/1gmDcMJfH8J6UAmTPRxDOg"},href:"https://api.spotify.com/v1/playlists/1gmDcMJfH8J6UAmTPRxDOg",id:"1gmDcMJfH8J6UAmTPRxDOg",images:[{height:640,url:"https://mosaic.scdn.co/640/ab67616d0000b2733667dc27da7b24360d6050d0ab67616d0000b273988ede5e1276e758b5f9e577ab67616d0000b273cc2cf912462d8ae4ef856434ab67616d0000b273d84a9bbcba91cb6a4a212b1b",width:640},{height:300,url:"https://mosaic.scdn.co/300/ab67616d0000b2733667dc27da7b24360d6050d0ab67616d0000b273988ede5e1276e758b5f9e577ab67616d0000b273cc2cf912462d8ae4ef856434ab67616d0000b273d84a9bbcba91cb6a4a212b1b",width:300},{height:60,url:"https://mosaic.scdn.co/60/ab67616d0000b2733667dc27da7b24360d6050d0ab67616d0000b273988ede5e1276e758b5f9e577ab67616d0000b273cc2cf912462d8ae4ef856434ab67616d0000b273d84a9bbcba91cb6a4a212b1b",width:60}],name:"good mood ✨🌸🦋🌻💛",owner:{display_name:"Adalynn Toma ☻",external_urls:{spotify:"https://open.spotify.com/user/aib711"},href:"https://api.spotify.com/v1/users/aib711",id:"aib711",type:"user",uri:"spotify:user:aib711"},primary_color:null,public:null,snapshot_id:"MzIxLGQyMGFhNzE1OTJmMDgzMTcxZjQ5NWNjNWVhMWJiMzU2ZjhjOTBjYWQ=",tracks:{href:"https://api.spotify.com/v1/playlists/1gmDcMJfH8J6UAmTPRxDOg/tracks",total:307},type:"playlist",uri:"spotify:playlist:1gmDcMJfH8J6UAmTPRxDOg"},{collaborative:false,description:"Get happy with today's dose of feel-good songs!",external_urls:{spotify:"https://open.spotify.com/playlist/37i9dQZF1DX3rxVfibe1L0"},href:"https://api.spotify.com/v1/playlists/37i9dQZF1DX3rxVfibe1L0",id:"37i9dQZF1DX3rxVfibe1L0",images:[{height:null,url:"https://i.scdn.co/image/ab67706f00000003aa93fe4e8c2d24fc62556cba",width:null}],name:"Mood Booster",owner:{display_name:"Spotify",external_urls:{spotify:"https://open.spotify.com/user/spotify"},href:"https://api.spotify.com/v1/users/spotify",id:"spotify",type:"user",uri:"spotify:user:spotify"},primary_color:null,public:null,snapshot_id:"MTYyMjMyODEwNywwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",tracks:{href:"https://api.spotify.com/v1/playlists/37i9dQZF1DX3rxVfibe1L0/tracks",total:78},type:"playlist",uri:"spotify:playlist:37i9dQZF1DX3rxVfibe1L0"},{collaborative:false,description:"",external_urls:{spotify:"https://open.spotify.com/playlist/1kE1IO0Wql8a7kXWS4T2EG"},href:"https://api.spotify.com/v1/playlists/1kE1IO0Wql8a7kXWS4T2EG",id:"1kE1IO0Wql8a7kXWS4T2EG",images:[{height:640,url:"https://mosaic.scdn.co/640/ab67616d0000b273095e89566008467beafdd44bab67616d0000b2730aa694f69ee25093e4ae9359ab67616d0000b273530c544608663c916df45e47ab67616d0000b273d3f5e0b570b130a6c68f15b7",width:640},{height:300,url:"https://mosaic.scdn.co/300/ab67616d0000b273095e89566008467beafdd44bab67616d0000b2730aa694f69ee25093e4ae9359ab67616d0000b273530c544608663c916df45e47ab67616d0000b273d3f5e0b570b130a6c68f15b7",width:300},{height:60,url:"https://mosaic.scdn.co/60/ab67616d0000b273095e89566008467beafdd44bab67616d0000b2730aa694f69ee25093e4ae9359ab67616d0000b273530c544608663c916df45e47ab67616d0000b273d3f5e0b570b130a6c68f15b7",width:60}],name:"Good Mood by DOT Dance",owner:{display_name:"DOT Dance",external_urls:{spotify:"https://open.spotify.com/user/5tfhzkymp0n2h8giwu6rld2nr"},href:"https://api.spotify.com/v1/users/5tfhzkymp0n2h8giwu6rld2nr",id:"5tfhzkymp0n2h8giwu6rld2nr",type:"user",uri:"spotify:user:5tfhzkymp0n2h8giwu6rld2nr"},primary_color:null,public:null,snapshot_id:"NTU3LGRmNjJmNWJkMGVkMWE5ZWEyMjFkZmUwMWIxMTBhOGI4NDdkZDFjMDk=",tracks:{href:"https://api.spotify.com/v1/playlists/1kE1IO0Wql8a7kXWS4T2EG/tracks",total:103},type:"playlist",uri:"spotify:playlist:1kE1IO0Wql8a7kXWS4T2EG"},{collaborative:false,description:"Kolo Tamam! Feel good Arabic songs.",external_urls:{spotify:"https://open.spotify.com/playlist/37i9dQZF1DWYBAUZiPMirH"},href:"https://api.spotify.com/v1/playlists/37i9dQZF1DWYBAUZiPMirH",id:"37i9dQZF1DWYBAUZiPMirH",images:[{height:null,url:"https://i.scdn.co/image/ab67706f00000003bdf7ab8bc13978a7c431e633",width:null}],name:"Arab Mood Booster",owner:{display_name:"Spotify",external_urls:{spotify:"https://open.spotify.com/user/spotify"},href:"https://api.spotify.com/v1/users/spotify",id:"spotify",type:"user",uri:"spotify:user:spotify"},primary_color:null,public:null,snapshot_id:"MTYyMjMyODExMiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",tracks:{href:"https://api.spotify.com/v1/playlists/37i9dQZF1DWYBAUZiPMirH/tracks",total:60},type:"playlist",uri:"spotify:playlist:37i9dQZF1DWYBAUZiPMirH"},{collaborative:false,description:"feel good rap songs for a good day :) Featuring Juice WRLD, iann dior, Kanye West, Lil Uzi Vert, Trippie Redd, and more.",external_urls:{spotify:"https://open.spotify.com/playlist/1H8zXnHKKV2unLMGQd1E72"},href:"https://api.spotify.com/v1/playlists/1H8zXnHKKV2unLMGQd1E72",id:"1H8zXnHKKV2unLMGQd1E72",images:[{height:null,url:"https://i.scdn.co/image/ab67706c0000bebb92d29cc0ae58185414c633b1",width:null}],name:"GOOD MOOD RAP",owner:{display_name:"alec",external_urls:{spotify:"https://open.spotify.com/user/k3rwdnjximygmcm1zw7bi4g3l"},href:"https://api.spotify.com/v1/users/k3rwdnjximygmcm1zw7bi4g3l",id:"k3rwdnjximygmcm1zw7bi4g3l",type:"user",uri:"spotify:user:k3rwdnjximygmcm1zw7bi4g3l"},primary_color:null,public:null,snapshot_id:"MTk4LGMwNzAwMmE0ZWM4MmY3MTQ4MWI3NzBhNzIyOTY1YTU5MGVkM2EwYzc=",tracks:{href:"https://api.spotify.com/v1/playlists/1H8zXnHKKV2unLMGQd1E72/tracks",total:141},type:"playlist",uri:"spotify:playlist:1H8zXnHKKV2unLMGQd1E72"},{collaborative:false,description:"",external_urls:{spotify:"https://open.spotify.com/playlist/3ZK9ks2cZJEz37apszTcPY"},href:"https://api.spotify.com/v1/playlists/3ZK9ks2cZJEz37apszTcPY",id:"3ZK9ks2cZJEz37apszTcPY",images:[{height:640,url:"https://mosaic.scdn.co/640/ab67616d0000b2731eae4b4bee84c621dff76b32ab67616d0000b2732acb18246481f4ff063973eeab67616d0000b27384c2fa0188566adf1deae772ab67616d0000b273ebae92a723fd5b67c21eb15a",width:640},{height:300,url:"https://mosaic.scdn.co/300/ab67616d0000b2731eae4b4bee84c621dff76b32ab67616d0000b2732acb18246481f4ff063973eeab67616d0000b27384c2fa0188566adf1deae772ab67616d0000b273ebae92a723fd5b67c21eb15a",width:300},{height:60,url:"https://mosaic.scdn.co/60/ab67616d0000b2731eae4b4bee84c621dff76b32ab67616d0000b2732acb18246481f4ff063973eeab67616d0000b27384c2fa0188566adf1deae772ab67616d0000b273ebae92a723fd5b67c21eb15a",width:60}],name:"Good Mood Country",owner:{display_name:"Brandon Chen",external_urls:{spotify:"https://open.spotify.com/user/12140859325"},href:"https://api.spotify.com/v1/users/12140859325",id:"12140859325",type:"user",uri:"spotify:user:12140859325"},primary_color:null,public:null,snapshot_id:"MzE2LGNiMGYwMjBhM2JmYjFjYzVhOGUyZTc5MTdmMDIwODRiZjA0YjcwMjE=",tracks:{href:"https://api.spotify.com/v1/playlists/3ZK9ks2cZJEz37apszTcPY/tracks",total:138},type:"playlist",uri:"spotify:playlist:3ZK9ks2cZJEz37apszTcPY"},{collaborative:false,description:"",external_urls:{spotify:"https://open.spotify.com/playlist/6JiV2meX43BrVsXWpxWd5k"},href:"https://api.spotify.com/v1/playlists/6JiV2meX43BrVsXWpxWd5k",id:"6JiV2meX43BrVsXWpxWd5k",images:[{height:640,url:"https://mosaic.scdn.co/640/ab67616d0000b2730a1d20ec09cab4bb17a36aabab67616d0000b2737a6339d6ddfd579f77559b3cab67616d0000b27386155dbe7fda3da5ce03cafbab67616d0000b273f9ca1ac1fea0c8c7220e4210",width:640},{height:300,url:"https://mosaic.scdn.co/300/ab67616d0000b2730a1d20ec09cab4bb17a36aabab67616d0000b2737a6339d6ddfd579f77559b3cab67616d0000b27386155dbe7fda3da5ce03cafbab67616d0000b273f9ca1ac1fea0c8c7220e4210",width:300},{height:60,url:"https://mosaic.scdn.co/60/ab67616d0000b2730a1d20ec09cab4bb17a36aabab67616d0000b2737a6339d6ddfd579f77559b3cab67616d0000b27386155dbe7fda3da5ce03cafbab67616d0000b273f9ca1ac1fea0c8c7220e4210",width:60}],name:"GOOD MOOD🥰",owner:{display_name:"DJLena🤍",external_urls:{spotify:"https://open.spotify.com/user/817u9oz6ftx69yh2zu77xc97a"},href:"https://api.spotify.com/v1/users/817u9oz6ftx69yh2zu77xc97a",id:"817u9oz6ftx69yh2zu77xc97a",type:"user",uri:"spotify:user:817u9oz6ftx69yh2zu77xc97a"},primary_color:null,public:null,snapshot_id:"NDk1LDRhNGMzYzcyMjE2MzVlOWZmMDQ0M2JlMDViNWRjMTU2MWZhNDE1MTg=",tracks:{href:"https://api.spotify.com/v1/playlists/6JiV2meX43BrVsXWpxWd5k/tracks",total:388},type:"playlist",uri:"spotify:playlist:6JiV2meX43BrVsXWpxWd5k"},{collaborative:false,description:"In the road to an interview or presentation?  Teaching an Art class? Cleaning around the house?  This playlist will give you the good vibes you need for an amazing day!",external_urls:{spotify:"https://open.spotify.com/playlist/6PqStbXasSZqqjVHUIUyFk"},href:"https://api.spotify.com/v1/playlists/6PqStbXasSZqqjVHUIUyFk",id:"6PqStbXasSZqqjVHUIUyFk",images:[{height:null,url:"https://i.scdn.co/image/ab67706c0000bebbc6947aed2cd3eb31f1cd464d",width:null}],name:"Good Mood Classics ",owner:{display_name:"ilian",external_urls:{spotify:"https://open.spotify.com/user/1244090452"},href:"https://api.spotify.com/v1/users/1244090452",id:"1244090452",type:"user",uri:"spotify:user:1244090452"},primary_color:null,public:null,snapshot_id:"MzU4LDBmZDIwMWU0YzIwY2M5NjNiZTcwNjY1NTM0ZDZhZDMwNWEwYjYwYTg=",tracks:{href:"https://api.spotify.com/v1/playlists/6PqStbXasSZqqjVHUIUyFk/tracks",total:311},type:"playlist",uri:"spotify:playlist:6PqStbXasSZqqjVHUIUyFk"},{collaborative:false,description:"Ein paar Lieder, die euch einfach happy mache sollen ;)",external_urls:{spotify:"https://open.spotify.com/playlist/3oebWdxx26gNy8MeFKP4ut"},href:"https://api.spotify.com/v1/playlists/3oebWdxx26gNy8MeFKP4ut",id:"3oebWdxx26gNy8MeFKP4ut",images:[{height:null,url:"https://i.scdn.co/image/ab67706c0000bebb53129007a48290512fa686f3",width:null}],name:"good mood",owner:{display_name:"Josie Hermer",external_urls:{spotify:"https://open.spotify.com/user/ux68zlww9fta74gdm4zkuyn73"},href:"https://api.spotify.com/v1/users/ux68zlww9fta74gdm4zkuyn73",id:"ux68zlww9fta74gdm4zkuyn73",type:"user",uri:"spotify:user:ux68zlww9fta74gdm4zkuyn73"},primary_color:null,public:null,snapshot_id:"NzAsYjY5MDUyNzYyMmM2MDY3ZTEzNzE2NmNlYTdmYTJjNTI2ZjBkZTIwNA==",tracks:{href:"https://api.spotify.com/v1/playlists/3oebWdxx26gNy8MeFKP4ut/tracks",total:52},type:"playlist",uri:"spotify:playlist:3oebWdxx26gNy8MeFKP4ut"},{collaborative:false,description:"In the next year, you will be able to find this playlist with the next title: Good Mood Music - Happy Songs Playlist 2022",external_urls:{spotify:"https://open.spotify.com/playlist/0deORnapZgrxFY4nsKr9JA"},href:"https://api.spotify.com/v1/playlists/0deORnapZgrxFY4nsKr9JA",id:"0deORnapZgrxFY4nsKr9JA",images:[{height:null,url:"https://i.scdn.co/image/ab67706c0000bebbb6bbf8c1ed5a685dd3edf473",width:null}],name:"Good Mood Music - Happy Songs Playlist 2021",owner:{display_name:"redmusiccompany",external_urls:{spotify:"https://open.spotify.com/user/redmusiccompany"},href:"https://api.spotify.com/v1/users/redmusiccompany",id:"redmusiccompany",type:"user",uri:"spotify:user:redmusiccompany"},primary_color:null,public:null,snapshot_id:"Nzc1OCxkZmIzOGI4YWY5YjBkMDNlOGQ3ZjFkOGIyNGYwZWRkMDIzYjZkYWZl",tracks:{href:"https://api.spotify.com/v1/playlists/0deORnapZgrxFY4nsKr9JA/tracks",total:80},type:"playlist",uri:"spotify:playlist:0deORnapZgrxFY4nsKr9JA"},{collaborative:false,description:"Uplifting jazz to get you in good mood.",external_urls:{spotify:"https://open.spotify.com/playlist/37i9dQZF1DWZCkamcYMQkz"},href:"https://api.spotify.com/v1/playlists/37i9dQZF1DWZCkamcYMQkz",id:"37i9dQZF1DWZCkamcYMQkz",images:[{height:null,url:"https://i.scdn.co/image/ab67706f000000031fd6a6c50e2f4ea48bf67811",width:null}],name:"Feel Good Jazz",owner:{display_name:"Spotify",external_urls:{spotify:"https://open.spotify.com/user/spotify"},href:"https://api.spotify.com/v1/users/spotify",id:"spotify",type:"user",uri:"spotify:user:spotify"},primary_color:null,public:null,snapshot_id:"MTYyMjE5MzE5OCwwMDAwMDAwODAwMDAwMTc5YjIzZmQ0NDcwMDAwMDE3NzA1OTJmMmNi",tracks:{href:"https://api.spotify.com/v1/playlists/37i9dQZF1DWZCkamcYMQkz/tracks",total:69},type:"playlist",uri:"spotify:playlist:37i9dQZF1DWZCkamcYMQkz"},{collaborative:false,description:"",external_urls:{spotify:"https://open.spotify.com/playlist/53hUCb2c29DfhOJb63RkfE"},href:"https://api.spotify.com/v1/playlists/53hUCb2c29DfhOJb63RkfE",id:"53hUCb2c29DfhOJb63RkfE",images:[{height:640,url:"https://mosaic.scdn.co/640/ab67616d0000b27308862f843ea27f44f8e8cbd8ab67616d0000b273b4c2469ec47edbc937a3070aab67616d0000b273d03fa6f4e758282b7920b5c8ab67616d0000b273df7cddc2d32ef9df762d5a30",width:640},{height:300,url:"https://mosaic.scdn.co/300/ab67616d0000b27308862f843ea27f44f8e8cbd8ab67616d0000b273b4c2469ec47edbc937a3070aab67616d0000b273d03fa6f4e758282b7920b5c8ab67616d0000b273df7cddc2d32ef9df762d5a30",width:300},{height:60,url:"https://mosaic.scdn.co/60/ab67616d0000b27308862f843ea27f44f8e8cbd8ab67616d0000b273b4c2469ec47edbc937a3070aab67616d0000b273d03fa6f4e758282b7920b5c8ab67616d0000b273df7cddc2d32ef9df762d5a30",width:60}],name:"Good Mood Vibes",owner:{display_name:"Blair Runion",external_urls:{spotify:"https://open.spotify.com/user/1295817659"},href:"https://api.spotify.com/v1/users/1295817659",id:"1295817659",type:"user",uri:"spotify:user:1295817659"},primary_color:null,public:null,snapshot_id:"NDIxLGQzNGE2Nzc4NTBiZDJmMGYzZDNkOWQyMmRhYTBiZmJhOWYzNjBhYzA=",tracks:{href:"https://api.spotify.com/v1/playlists/53hUCb2c29DfhOJb63RkfE/tracks",total:386},type:"playlist",uri:"spotify:playlist:53hUCb2c29DfhOJb63RkfE"},{collaborative:false,description:"The ultimate playlist to fuel your good mood while on the road.",external_urls:{spotify:"https://open.spotify.com/playlist/37i9dQZF1DX9wC1KY45plY"},href:"https://api.spotify.com/v1/playlists/37i9dQZF1DX9wC1KY45plY",id:"37i9dQZF1DX9wC1KY45plY",images:[{height:null,url:"https://i.scdn.co/image/ab67706f00000003fd076b5e9bdffcd1929c7290",width:null}],name:"Classic Road Trip Songs",owner:{display_name:"Spotify",external_urls:{spotify:"https://open.spotify.com/user/spotify"},href:"https://api.spotify.com/v1/users/spotify",id:"spotify",type:"user",uri:"spotify:user:spotify"},primary_color:null,public:null,snapshot_id:"MTYyMjMyODEwOCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",tracks:{href:"https://api.spotify.com/v1/playlists/37i9dQZF1DX9wC1KY45plY/tracks",total:100},type:"playlist",uri:"spotify:playlist:37i9dQZF1DX9wC1KY45plY"},{collaborative:false,description:"",external_urls:{spotify:"https://open.spotify.com/playlist/5EMyve8SGXbajHuH5eqYEr"},href:"https://api.spotify.com/v1/playlists/5EMyve8SGXbajHuH5eqYEr",id:"5EMyve8SGXbajHuH5eqYEr",images:[{height:640,url:"https://mosaic.scdn.co/640/ab67616d0000b2734718e2b124f79258be7bc452ab67616d0000b27364bd23d64f90b1910ead95a1ab67616d0000b27370ed76855fb92d540a595463ab67616d0000b2737fcead687e99583072cc217b",width:640},{height:300,url:"https://mosaic.scdn.co/300/ab67616d0000b2734718e2b124f79258be7bc452ab67616d0000b27364bd23d64f90b1910ead95a1ab67616d0000b27370ed76855fb92d540a595463ab67616d0000b2737fcead687e99583072cc217b",width:300},{height:60,url:"https://mosaic.scdn.co/60/ab67616d0000b2734718e2b124f79258be7bc452ab67616d0000b27364bd23d64f90b1910ead95a1ab67616d0000b27370ed76855fb92d540a595463ab67616d0000b2737fcead687e99583072cc217b",width:60}],name:"good mood playlist😜😻❤️",owner:{display_name:"danielle_snipe",external_urls:{spotify:"https://open.spotify.com/user/danielle_snipe"},href:"https://api.spotify.com/v1/users/danielle_snipe",id:"danielle_snipe",type:"user",uri:"spotify:user:danielle_snipe"},primary_color:null,public:null,snapshot_id:"MTAxMCw2ZDExNjRlZTc2YzE5MWZjNDAxNzYyMDkxMDZiMzEzOWRhZTRjN2E4",tracks:{href:"https://api.spotify.com/v1/playlists/5EMyve8SGXbajHuH5eqYEr/tracks",total:886},type:"playlist",uri:"spotify:playlist:5EMyve8SGXbajHuH5eqYEr"},{collaborative:false,description:"The Best Vibes 💖",external_urls:{spotify:"https://open.spotify.com/playlist/7s09coXLGbofhNrwSusr4G"},href:"https://api.spotify.com/v1/playlists/7s09coXLGbofhNrwSusr4G",id:"7s09coXLGbofhNrwSusr4G",images:[{height:null,url:"https://i.scdn.co/image/ab67706c0000bebbc2e8b71a6b0cbe719781c4eb",width:null}],name:"Happy Songs 2021 - Good Vibes and Upbeat Music for a Good Mood 😊",owner:{display_name:"Music-Hits",external_urls:{spotify:"https://open.spotify.com/user/6n2tcrdaprmet7ferrms32vlv"},href:"https://api.spotify.com/v1/users/6n2tcrdaprmet7ferrms32vlv",id:"6n2tcrdaprmet7ferrms32vlv",type:"user",uri:"spotify:user:6n2tcrdaprmet7ferrms32vlv"},primary_color:null,public:null,snapshot_id:"MTQ5LDI2MTE1ODVhYWE0YmRmOTE0NGFjMDNjMmY1YTc2M2MyNDdkYjMxZDQ=",tracks:{href:"https://api.spotify.com/v1/playlists/7s09coXLGbofhNrwSusr4G/tracks",total:69},type:"playlist",uri:"spotify:playlist:7s09coXLGbofhNrwSusr4G"},{collaborative:false,description:"for all ur jam needs",external_urls:{spotify:"https://open.spotify.com/playlist/3axbMe7w17Mt0Hdu5tw9EB"},href:"https://api.spotify.com/v1/playlists/3axbMe7w17Mt0Hdu5tw9EB",id:"3axbMe7w17Mt0Hdu5tw9EB",images:[{height:null,url:"https://i.scdn.co/image/ab67706c0000bebbb8f667304159b2e5fdcfc614",width:null}],name:"GOOD MOOD BITCH",owner:{display_name:"ellajbatt",external_urls:{spotify:"https://open.spotify.com/user/ellajbatt"},href:"https://api.spotify.com/v1/users/ellajbatt",id:"ellajbatt",type:"user",uri:"spotify:user:ellajbatt"},primary_color:null,public:null,snapshot_id:"MjgyLGJjM2ExNTVjMDcxM2NiMzFkMzM3NmFjM2NlYmM3NGQ0NDA4YTMxMzE=",tracks:{href:"https://api.spotify.com/v1/playlists/3axbMe7w17Mt0Hdu5tw9EB/tracks",total:258},type:"playlist",uri:"spotify:playlist:3axbMe7w17Mt0Hdu5tw9EB"},{collaborative:false,description:"This playlist is guaranteed to put you in a good mood!",external_urls:{spotify:"https://open.spotify.com/playlist/4u1ze8HtBzEuwYjKrsnYeg"},href:"https://api.spotify.com/v1/playlists/4u1ze8HtBzEuwYjKrsnYeg",id:"4u1ze8HtBzEuwYjKrsnYeg",images:[{height:640,url:"https://mosaic.scdn.co/640/ab67616d0000b27305d647d0e976e7fb2460492eab67616d0000b27309ec47c2a2173e984d8461e9ab67616d0000b2731e340d1480e7bb29a45e3bd7ab67616d0000b27336a9ed72b45e54ff307641be",width:640},{height:300,url:"https://mosaic.scdn.co/300/ab67616d0000b27305d647d0e976e7fb2460492eab67616d0000b27309ec47c2a2173e984d8461e9ab67616d0000b2731e340d1480e7bb29a45e3bd7ab67616d0000b27336a9ed72b45e54ff307641be",width:300},{height:60,url:"https://mosaic.scdn.co/60/ab67616d0000b27305d647d0e976e7fb2460492eab67616d0000b27309ec47c2a2173e984d8461e9ab67616d0000b2731e340d1480e7bb29a45e3bd7ab67616d0000b27336a9ed72b45e54ff307641be",width:60}],name:"Friday Feel Good",owner:{display_name:"jalapena99",external_urls:{spotify:"https://open.spotify.com/user/jalapena99"},href:"https://api.spotify.com/v1/users/jalapena99",id:"jalapena99",type:"user",uri:"spotify:user:jalapena99"},primary_color:null,public:null,snapshot_id:"MTAwNiwwZmM2NDg3NGNiMzY0MmYzODYwZTVjODRmM2Q0ZTY4NjZlYmU1OTBl",tracks:{href:"https://api.spotify.com/v1/playlists/4u1ze8HtBzEuwYjKrsnYeg/tracks",total:464},type:"playlist",uri:"spotify:playlist:4u1ze8HtBzEuwYjKrsnYeg"},{collaborative:false,description:"La playlist pour garder le sourire :) :) :) ",external_urls:{spotify:"https://open.spotify.com/playlist/1QxdL1fPW4X4eex4CrFryW"},href:"https://api.spotify.com/v1/playlists/1QxdL1fPW4X4eex4CrFryW",id:"1QxdL1fPW4X4eex4CrFryW",images:[{height:null,url:"https://i.scdn.co/image/ab67706c0000bebb60053f0f7e894663296020de",width:null}],name:"Good Mood, Bonne humeur | Happy Time | Happy & Relax",owner:{display_name:"Digster France",external_urls:{spotify:"https://open.spotify.com/user/digster.fr"},href:"https://api.spotify.com/v1/users/digster.fr",id:"digster.fr",type:"user",uri:"spotify:user:digster.fr"},primary_color:null,public:null,snapshot_id:"MTUzOSxkZjVjNjk4NDQzZDliODdjYWUyZTYyYWFkNWMyNmFhZTU3MTBmMjVj",tracks:{href:"https://api.spotify.com/v1/playlists/1QxdL1fPW4X4eex4CrFryW/tracks",total:230},type:"playlist",uri:"spotify:playlist:1QxdL1fPW4X4eex4CrFryW"},{collaborative:false,description:"Songs that will put yout in a good mood INSTANTLY! ",external_urls:{spotify:"https://open.spotify.com/playlist/3Hs562oYeOsTcNmiUSj0f8"},href:"https://api.spotify.com/v1/playlists/3Hs562oYeOsTcNmiUSj0f8",id:"3Hs562oYeOsTcNmiUSj0f8",images:[{height:null,url:"https://i.scdn.co/image/ab67706c0000bebb5c54546f444f78ae3bb94a3e",width:null}],name:"Happy Mood ",owner:{display_name:"Ischtar Isik",external_urls:{spotify:"https://open.spotify.com/user/ischtarisik"},href:"https://api.spotify.com/v1/users/ischtarisik",id:"ischtarisik",type:"user",uri:"spotify:user:ischtarisik"},primary_color:null,public:null,snapshot_id:"NTMsMjNlMDY4ZDVmZDcxYWMxN2VkODQyYTQ2OWYxOTE1OWFmNzVlYjQxMA==",tracks:{href:"https://api.spotify.com/v1/playlists/3Hs562oYeOsTcNmiUSj0f8/tracks",total:41},type:"playlist",uri:"spotify:playlist:3Hs562oYeOsTcNmiUSj0f8"},{collaborative:false,description:"",external_urls:{spotify:"https://open.spotify.com/playlist/2Tz7buITOUUiOgAMaFP6xU"},href:"https://api.spotify.com/v1/playlists/2Tz7buITOUUiOgAMaFP6xU",id:"2Tz7buITOUUiOgAMaFP6xU",images:[{height:640,url:"https://mosaic.scdn.co/640/ab67616d0000b27315f4cfd072793fa7532e674aab67616d0000b273280a72fdd9bd502bcba6ada8ab67616d0000b27384feca0133d9a8e6539a8325ab67616d0000b2739e1cfc756886ac782e363d79",width:640},{height:300,url:"https://mosaic.scdn.co/300/ab67616d0000b27315f4cfd072793fa7532e674aab67616d0000b273280a72fdd9bd502bcba6ada8ab67616d0000b27384feca0133d9a8e6539a8325ab67616d0000b2739e1cfc756886ac782e363d79",width:300},{height:60,url:"https://mosaic.scdn.co/60/ab67616d0000b27315f4cfd072793fa7532e674aab67616d0000b273280a72fdd9bd502bcba6ada8ab67616d0000b27384feca0133d9a8e6539a8325ab67616d0000b2739e1cfc756886ac782e363d79",width:60}],name:"good mood 😁✨ ",owner:{display_name:"vivi 🦙",external_urls:{spotify:"https://open.spotify.com/user/vswim06"},href:"https://api.spotify.com/v1/users/vswim06",id:"vswim06",type:"user",uri:"spotify:user:vswim06"},primary_color:null,public:null,snapshot_id:"MjEyLDVkZjFhNjIyYzdkY2I5N2ZkYTljNGYwYjBhMDUyMWE0YTBkZjJlYTg=",tracks:{href:"https://api.spotify.com/v1/playlists/2Tz7buITOUUiOgAMaFP6xU/tracks",total:206},type:"playlist",uri:"spotify:playlist:2Tz7buITOUUiOgAMaFP6xU"}],limit:20,next:"https://api.spotify.com/v1/search?query=Good+mood&type=playlist&market=US&offset=20&limit=20",offset:0,previous:null,total:66644}});
  const [finalMessage, setfinalMessage] = useState("")

  function  getSpotifPlaylist(){



    // var tt="Good%20Mood";
    
console.log(finalMessage)

    axios.get(`https://api.spotify.com/v1/search1?q=${finalMessage}&type=playlist&market=US&limit=5`,{

   headers:{
     "Accept":"application/json",
     "Content-Type":"application/json",
     "Authorization":"Bearer BQCbZndomgECs53ZPfXmPX1E35LuaLAdru1vgi5kPsV2JoVoBwfS227euW8WV9Q9Z6gzKdW4nBiJUkYJOZei9xjFxR_xLojyvFafb1SSXC2Q9xOIkvpsMNt1ETH0tNYwTn-r_OeOmT54pOCY2QAnSB5fb1EUBPw"
   }

    }).then(res=>{
      console.log(res.data)
      setSpotify(res.data)}).catch();
     
    console.log(spotify);

  }






  const Quiz = [
    {
      question: "Choose One Color",
      options: [
        {
          optionText: "https://www.htmlcsscolor.com/preview/gallery/57595D.png",
        },
        {
          optionText:
            "https://htmlcolorcodes.com/assets/images/colors/baby-blue-color-solid-background-1920x1080.png",
        },
        {
          optionText:
            "https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png",
        },
        {
          optionText:
            "https://images-na.ssl-images-amazon.com/images/I/212QDOT3tGL._SX331_BO1,204,203,200_.jpg",
        },
      ],
    },
    {
      question: "Choose one place",
      options: [
        {
          optionText: "https://ourplnt.com/wp-content/uploads/2016/06/Rain.jpg",
        },
        {
          optionText:
            "https://fsb.zobj.net/crop.php?r=AzeXWLCfm7VHluyBaN5WPUbPiy0mwIqcmZkokeMxx2gCs5urOA-J7n_sgTjWwJvcFvpX-B7PSIdAueB9F072O0gyIaoQTv5XYIEWA8nxMfaZPg4k-ylNA2ZhKFOWmpmluqTmQIjDNXp_2AFL",
        },
        {
          optionText:
            "https://i.pinimg.com/originals/de/e8/3b/dee83b272b5f8f2e6ccc5c83bf1ab61f.jpg",
        },
        {
          optionText:
            "https://previews.123rf.com/images/viewapart/viewapart1802/viewapart180200014/95012377-concert-festival-event-with-dj-playing-music-at-after-party-entertainment-and-nightlife-concept-with.jpg",
        },
      ],
    },
    {
      question: "Choose one Drinks",
      options: [
        {
          optionText:
            "https://images.newindianexpress.com/uploads/user/imagelibrary/2020/7/19/w1200X800/Post_tests-.jpg",
        },
        {
          optionText:
            "https://mytastycurry.com/wp-content/uploads/2020/04/Cafe-style-cold-coffee-with-icecream.jpg",
        },
        {
          optionText:
            "https://thumbor.thedailymeal.com/PAHJHRbSHa5048uBChXJ_KECceM=/870x565/https://www.theactivetimes.com/sites/default/files/uploads/0/0-shutterstock_282501269_1.jpg",
        },
        {
          optionText:
            "https://reizeclub.com/wp-content/uploads/2019/04/Monster-energy-drink.jpg",
        },
      ],
    },
    {
      question: "Choose a Flower",
      options: [
        {
          optionText:
            "https://penrosefriends.org/wp-content/uploads/Black-Rose-is-a-myth-1.jpg",
        },
        {
          optionText:
            "https://i.pinimg.com/originals/c8/56/4c/c8564c6441f0cfc1a23616173de7241e.jpg",
        },
        {
          optionText:
            "https://hungryplant.com/wp-content/uploads/2019/06/big-mount-venus-flytrap-1-1024x683.jpg",
        },
        {
          optionText:
            "https://www.almanac.com/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/image_nodes/sunflower-1627193_1920.jpg?itok=z0U222mG",
        },
      ],
    },
    {
      question: "Choose a pet",
      options: [
        {
          optionText:
            "https://www.thesprucepets.com/thmb/K1rbxOr4TJxbSMuynnHQc5g9ZjM=/1885x1414/smart/filters:no_upscale()/Pug-GettyImages-1140575734-5262294c43ff4ec993395d780fb0ee16.jpg",
        },
        {
          optionText:
            "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/taking_care_of_kitten_slideshow/1800x1200_taking_care_of_kitten_slideshow.jpg",
        },
        {
          optionText:
            "https://i.natgeofe.com/n/80b97fe3-c0fb-40a6-a6a6-88b5c3bb9d30/01-lion-populations-nationalgeographic_1777804.jpg",
        },
        {
          optionText:
            "https://www.treehugger.com/thmb/4POnzxta535OuxqNIRBWCUzK39M=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/horse.primary-e9a47e1c486c4fb7bf729e05b59cf0df.jpg",
        },
      ],
    },
  ];
  const [count, setCount] = useState(0);
  const [mood, setMood] = useState([0, 0, 0, 0]);
  const [msg, setMsg] = useState("");
  const thik = (index) => {
    let temp = [];
    for (let i = 0; i < 5; i++) {
      if (i === count) {
        temp.push(index);
      } else {
        temp.push(mood[i]);
      }
    }
    setMood(temp);
    if (count === 4) {
      let mx = 0,
        id1 = -1;
      let temp1 = [0, 0, 0, 0];
      for (let i = 0; i < 5; i++) {
        temp1[mood[i]] += 1;
      }
      for (let i = 0; i < 5; i++) {
        if (temp1[i] >= mx) {
          mx = temp1[i];
          id1 = i;
        }
      }
      if (id1 === 0) {
        setMsg("Sad");
        setfinalMessage("Good%20Mood")
      } else if (id1 === 1) {
        setMsg("Calm");
        setfinalMessage("calm")
      } else if (id1 === 2) {
        setMsg("Angry");
        setfinalMessage("relaxing")
      } else {
        setMsg("Energetic");
        setfinalMessage("party")
      }
      getSpotifPlaylist();
    }
  };
  return (
    <>
      <div className="main">

       
        <div className="quizz">
          <div className="ques">
            {count <= 4 ? (

           
              <h2>{Quiz[count].question} : </h2>
            ) : (
              <div className="spotify"> 
                 {getSpotifPlaylist()}
              <h2 style={{}}>You are {msg}</h2>
              
             
              <h3 style={{color:"white"}}  > Click On Any Button Below To Find Playlist To Improve  Your Mood  </h3>
              { spotify!={}?<><h4>
            {/* {spotify.playlists.items[0].external_urls.spotify} */}
               
 

            <a 
           style={{marginTop:"3vh"}}
          target="_blank"
            href= {spotify.playlists.items[ (Math.floor(Math.random()*12))  ].external_urls.spotify} >
<img
 
 style={{width: "2.5vw",
  height: "5vh"}}
 src="https://th.bing.com/th/id/OIP.FB2Wza9u1VcVXBjtka8R5gHaHa?pid=ImgDet&rs=1"/>

            </a>
<div  style={{marginTop:"3vh"}}>
            <a 
           
           target="_blank"
             href= {spotify.playlists.items[
              (Math.floor(Math.random()*12))
             ].external_urls.spotify} >
 
 <img
  
  style={{width: "2.5vw",
   height: "5vh"}}
  src="https://th.bing.com/th/id/OIP.FB2Wza9u1VcVXBjtka8R5gHaHa?pid=ImgDet&rs=1"/>
 
             </a>
             </div>
             <div  style={{marginTop:"3vh"}}>
            <a 
           
           target="_blank"
             href= {spotify.playlists.items[
              (Math.floor(Math.random()*12))
             ].external_urls.spotify} >
 
 <img
  
  style={{width: "2.5vw",
   height: "5vh"}}
  src="https://th.bing.com/th/id/OIP.FB2Wza9u1VcVXBjtka8R5gHaHa?pid=ImgDet&rs=1"/>
 
             </a>
             </div>
               </h4>
               
               </>:null}
   {/* console.log(spotify.playlists.items[0].external_urls.spotify)} </h1>:null}. */}
    </div>
            )}
          </div>
          <div className="options">
            {count <= 4
              ? Quiz[count].options.map((option, index) => (
                  <button
                    className="buttonx"
                    onClick={() => {
                      setCount((count) => count + 1);
                      thik(index);
                    }}
                  >
                    <span>
                      <img src={option.optionText} alt="" />
                    </span>
                  </button>
                ))
              : null}


              
          </div>
        </div>
{/* {console.log(spotify)}
        <button onClick={getSpotifPlaylist} >  fff</button> */}
      </div>
    </>
  );
};
