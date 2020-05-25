import { Skill } from './skill';
import { workExperience} from './workExperience';
import { education } from './education';
import { socialMedia } from './socialMedia';
import { androiddevproject } from './androiddevproject';
import { softwaredevproject } from './softwaredevproject';
import { webdevproject} from './webdevProject';
import { cpprofile } from './cpprofile';

export class Detail { 
    name: string;
    image: string;
    summary: string;
    banner: string;
    skills: Skill[];
    github: string;
    githubusername: string;
    buymecoffee: string;
    quora: string;
    linkdin: string;
    workExperience : workExperience[];
    education: education[];
    mail: string;
    socialMedia: socialMedia[];
    cpprofile: cpprofile[];
    androiddevproject: androiddevproject[];
    softwaredevproject: softwaredevproject[];
    webdevproject: webdevproject[];
}