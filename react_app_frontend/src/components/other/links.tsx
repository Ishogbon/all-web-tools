import { ImCalculator, ImHome } from 'react-icons/im';
import { TbTransformFilled, TbMathFunction, TbZoomCheck, TbDeviceAnalytics } from 'react-icons/tb';
import { MdNetworkCheck, MdRecordVoiceOver, MdSummarize, MdVerified } from 'react-icons/md';
import { IoMdCreate } from 'react-icons/io';
import { IoBuild } from 'react-icons/io5';
import { FaPython } from 'react-icons/fa';
import { RiApps2Fill } from 'react-icons/ri';
import { SiGoogleoptimize } from 'react-icons/si';
import { BiImageAdd } from 'react-icons/bi';
import { GiGrowth } from 'react-icons/gi';
import { BsBrowserChrome, BsBrowserEdge, BsBrowserFirefox, BsBrowserSafari, BsFileImage, BsGearWideConnected, BsTranslate } from 'react-icons/bs';

import { type NavData } from '../header/navigation';

export const NAV_LINKS: NavData[] = [
    {
        navName: 'Home',
        navLink: '/',
        navIcon: <ImHome />
    },
    {
        navName: 'Calculators',
        navLink: '/calculators',
        navIcon: <ImCalculator />
    },
    {
        navName: 'Converters',
        navLink: '/converters',
        navIcon: <TbTransformFilled />
    },
    {
        navName: 'Generators',
        navLink: '/generators',
        navIcon: <IoMdCreate />
    },
    { // validators are checkers e.g grammar checkers, plagiarism checkers, same content checker e.t.c
        navName: 'Validators',
        navLink: '/validators',
        navIcon: <MdVerified />
    },
    {
        navName: 'AI Math Solver',
        navLink: '/math-solvers',
        navIcon: <TbMathFunction />
    },
    {
        navName: 'Programming',
        navLink: '/programming',
        navIcon: <FaPython />
    },
    {
        navName: 'Quick Editors',
        navLink: '/quick-editors',
        navIcon: <RiApps2Fill />
    },
    { // Try to add a ai feature here that allow users record meetings and automatic transcription like Fireflies AI
        navName: 'Productivity',
        navLink: '/productivity',
        navIcon: <BsGearWideConnected />
    },
    {
        navName: 'Browser Info',
        navLink: '/browser-info',
        navIcon: (() => {
            // Get the user agent string
            const userAgent = navigator.userAgent;
            let image: React.ReactElement;
            // Check if the user is using Chrome
            if (userAgent.includes('Chrome')) {
                image = <BsBrowserChrome />;
            }/* Check if the user is using Firefox */ else if (userAgent.includes('Firefox')) {
                image = <BsBrowserFirefox />;
            }/* Check if the user is using Safari */ else if (userAgent.includes('Safari')) {
                image = <BsBrowserSafari />;
            }/* Check if the user is using Internet Explorer */ else if (userAgent.includes('MSIE') || userAgent.includes('Trident')) {
                image = <BsBrowserEdge />;
            }/* Check if the user is using Edge */ else if (userAgent.includes('Edge')) {
                image = <BsBrowserEdge />;
            }/* If none of the above conditions are true, assume the user is using something else */ else {
                image = <BsBrowserChrome />;
            }
            return image;
        })()
    },
    {
        navName: 'Network Info',
        navLink: '/network-info',
        navIcon: <MdNetworkCheck />
    },
    {
        navName: 'AI Translators',
        navLink: '/translators',
        navIcon: <BsTranslate />
    },
    {
        navName: 'AI Summarizer',
        navLink: '/summarizer',
        navIcon: <MdSummarize />
    },
    {
        navName: 'AI Content Generator',
        navLink: '/content-generator',
        navIcon: <IoBuild />
    },
    {
        navName: 'AI Content Checker',
        navLink: '/content-checker',
        navIcon: <TbZoomCheck />
    },
    {
        navName: 'Web Page Analyzer',
        navLink: '/web-page-analyzer',
        navIcon: <TbDeviceAnalytics />
    },
    {
        navName: 'SEO Tools',
        navLink: '/seo-tools',
        navIcon: <SiGoogleoptimize />
    },
    {
        navName: 'AI Image Recognition',
        navLink: '/image-recognition',
        navIcon: <BsFileImage/>
    },
    {
        navName: 'AI Image Generator',
        navLink: '/image-generator',
        navIcon: <BiImageAdd />
    },
    {
        navName: 'AI Voice Generator',
        navLink: '/voice-generator',
        navIcon: <MdRecordVoiceOver />
    },
    {
        navName: 'AI Image Upscaler',
        navLink: '/image-enhancer',
        navIcon: <GiGrowth />
    }
];
