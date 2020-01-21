import React from 'react';
import { BreakLine } from '../break-line/break-line.component';
import { UserInterface } from '../user-interface/user-interface.component';

import css from './chat.module.css';

const USERS = [
    { userName: 'User' },
    { userName: 'Other User' },
    { userName: 'Third User' },
];

export class Chat extends React.PureComponent {
    render() {
        return (
            <div className={css.container}>
                <BreakLine />
                <div className={css.content}>
                    {USERS.map(user => (
                        <UserInterface userName={user.userName} />
                    ))}
                </div>
            </div>
        );
    }
}
