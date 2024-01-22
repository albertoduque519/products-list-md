import { SearchIcon } from './SearchIcon'
import { InfoIcon } from './InfoIcon'
import { FlagIcon } from './FlagIcon'
import { LogoIcon  } from './LogoIcon'

const iconComponents: { [key: string]: React.FC<React.SVGProps<JSX.Element>> } = {
    search: SearchIcon,
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