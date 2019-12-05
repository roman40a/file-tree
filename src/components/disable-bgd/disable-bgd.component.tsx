import React from 'react';
import cn from 'classnames';

import css from './disable-bgd.module.css';

type Props = {
    shown: boolean;
};

export class DisableBgd extends React.PureComponent<Props> {
    render() {
        const { shown } = this.props;
        const containerClassName = cn(css.container, {
            [css.container__hidden]: !shown,
        });

        return (
            <div className={containerClassName}>
                <div className={css.content}>Not Connected</div>
            </div>
        );
    }
}
