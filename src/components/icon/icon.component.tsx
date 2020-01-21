import React from 'react';
import cn from 'classnames';

import css from './icon.module.css';

export type Props = {
    src?: string;
};

export class Icon extends React.PureComponent<Props> {
    render() {
        const { src } = this.props;

        const style = {
            backgroundImage: `url("${src}")`,
        };

        return <div className={css.container} style={style} />;
    }
}
