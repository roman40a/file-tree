import React from 'react';

import css from './bucket.module.css';

type Props = {
    percent: number;
    onTrashActivate(): void;
};

export class Bucket extends React.PureComponent<Props> {
    render() {
        const { percent, onTrashActivate } = this.props;

        return (
            <div className={css.container}>
                <div className={css.line} />
                <div className={css.content}>
                    <div className={css.barContainer}>
                        <div className={css.barWrapper}>
                            <div
                                className={css.bar}
                                style={{ width: `${percent}%` }}
                            />
                        </div>
                        <div className={css.subscription}>
                            <div
                                className={css.icon}
                                onClick={onTrashActivate}
                            />
                            <div
                                className={css.percent}
                            >{`${percent}/100`}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
