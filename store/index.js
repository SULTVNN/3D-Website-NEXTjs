import { color } from "framer-motion";
import { proxy } from "valtio";

const state = proxy({
    intro:true ,
    color : "#000",
    isLogoTexture : false,
    isFullTexture : true ,
    logoDecal:"./nike-logo-png-132.png",
    fullDecal : "./wallpaperflare.com_wallpaper (4).jpg"
})
export default state;