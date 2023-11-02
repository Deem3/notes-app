import { nameInitials } from '@libs/helpers';
import { userInfoAtom } from '@libs/jotai';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { Button, DropdownMenu } from '@radix-ui/themes';
import { useAtom } from 'jotai';
import Cookies from 'js-cookie';
import { FaRegStickyNote } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useAtom(userInfoAtom);
  const handleLogout = () => {
    Cookies.remove('token');
    navigate('/auth');
    setUserInfo({
      email: '',
      firstName: '',
      lastName: '',
      id: '',
    });
  };

  return (
    <div className="w-screen h-14 bg-white shadow-md flex justify-between items-center [&>*]:mx-12">
      <div className="flex items-center gap-2">
        <FaRegStickyNote className="h-7 w-7" />
        <p className="font-lobster text-2xl font-bold">Notes App</p>
      </div>

      <div className="flex items-center gap-2">
        <div>{nameInitials(userInfo?.firstName, userInfo?.lastName)}</div>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="solid" className="outline-none">
              <CaretDownIcon color="black" />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item>Profile</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item color="red" onClick={handleLogout}>
              Log Out
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </div>
  );
};
