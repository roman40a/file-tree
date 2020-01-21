import React from 'react';
import { Icon } from '../icon/icon.component';

import userImage from './images/user.png';
import css from './user-interface.module.css';

type Props = {
    userIcon?: string;
    userName: string;
};

type State = {
    isOpened: boolean;
};

export class UserInterface extends React.PureComponent<Props, State> {
    readonly state: State = {
        isOpened: false,
    };

    handleToggle = () => {
        this.setState(state => ({ isOpened: !state.isOpened }));
    };

    render() {
        const { userName, userIcon } = this.props;
        const { isOpened } = this.state;

        return (
            <div className={css.container}>
                <div className={css.userItem} onClick={this.handleToggle}>
                    <Icon src={userIcon || userImage} />
                    <div className={css.userName}>{userName}</div>
                </div>
                {isOpened && (
                    <textarea
                        placeholder={'type text'}
                        className={css.message}
                    />
                )}
            </div>
        );
    }
}
