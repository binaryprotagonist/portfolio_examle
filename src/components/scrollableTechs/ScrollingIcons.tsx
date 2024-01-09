import React from 'react';
import { FaCoffee, FaHeart, FaStar } from 'react-icons/fa';
import styles from './ScrollingIcons.module.css';
import {
    SiRedux,
    SiReact,
    SiNodedotjs,
    SiMysql,
    SiSequelize,
    SiAmazonaws,
    SiPostman,
    SiSpotify,
    SiNpm,
    SiMongodb,
    SiFirebase,
    SiAndroidstudio,
    SiAndroid,
    SiXcode,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiIos,
    SiLinux,
    SiFigma,
    SiLaravel,
    SiPhp,
    SiGraphql,
    SiApollographql,
    SiGoogleanalytics,
} from "react-icons/si";
import { VscGithub } from "react-icons/vsc"
import { CgWindows } from "react-icons/cg"
import { TbBrandVscode } from "react-icons/tb"
const icons = [
    SiRedux,
    SiReact,
    SiNodedotjs,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiMysql,
    SiSequelize,
    SiAmazonaws,
    SiPostman,
    SiSpotify,
    SiNpm,
    SiMongodb,
    SiFirebase,
    SiLaravel,
    SiPhp,
    SiGraphql,
    SiApollographql,
    SiGoogleanalytics,
    SiAndroidstudio,
    TbBrandVscode,
    SiAndroid,
    SiXcode,
    SiIos,
    CgWindows,
    VscGithub,
    SiLinux,
    SiFigma,
]
const ScrollingIcons = () => {
    return (
        <div className={styles.scrollContainer}>
            <div className={`${styles.iconContainer}`}>
                {icons.map((Icon, index) => (
                    <div key={index} className={styles.icon}>
                        <Icon className="sm:w-10/12" size={30} color='#fff' />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScrollingIcons;
