import SearchIcon from '../../../assets/search.svg?react'
import HeartIcon from '../../../assets/heart.svg?react'
import ArrowRightIcon from '../../../assets/arrowRight.svg?react'
import InfoIcon from '../../../assets/info.svg?react'
import FlagIcon from '../../../assets/flag.svg?react'
import LogoIcon from '../../../assets/logo.svg?react'

const iconComponents: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
    search: SearchIcon,
    heart: HeartIcon,
    arrowRight: ArrowRightIcon,
    info: InfoIcon,
    flag: FlagIcon,
    logo: LogoIcon,
};

const Icon = ({ type }: { type: string }) => {
    const IconComponent = iconComponents[type];

    if (!IconComponent) {
        console.error(`Invalid icon type: ${type}`);
        return null;
    }

    return <IconComponent />;
};

export default Icon;