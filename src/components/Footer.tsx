import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
const Footer = () => {
    return (
        <footer>
            <hr className="my-6 border-grey sm:mx-auto lg:my-8" />
            <div className="p-6 flex flex-col gap-4 items-center justify-center">
                <div className="flex flex-row items-center justify-center gap-5">
                    <a href="https://www.linkedin.com/in/kudoabhijeet/"><IoLogoLinkedin className="w-8 h-8" /></a>
                    <a href="https://github.com/kudoabhijeet"><IoLogoGithub className="w-8 h-8" /></a>
                    <a href="https://calendly.com/kudoabhijeet/1hr"><SlCalender className="w-8 h-8" /></a>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-300 text-center">Made with &#9829; by <a href="https://kudoabhijeet.com/">Abhijeet.</a> Feel free to copy anything.
                </div>
            </div>
        </footer>
    )
};
export default Footer;