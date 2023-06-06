import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal';
import { useCallback, useState } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAN_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {/* eslint-disable-next-line */}
                {t('Quis laborum sunt est ea exercitation Lorem esse. Ipsum voluptate do esse duis aliquip aliqua id commodo reprehenderit exercitation. Reprehenderit ea consectetur aliquip cillum ad irure laborum cillum consequat proident deserunt. Cupidatat laboris proident cupidatat commodo id occaecat duis consequat duis quis id qui. Eiusmod velit sit occaecat ipsum incididunt sit voluptate.')}
            </Modal>
        </div>
    );
};
