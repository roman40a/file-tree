import React from 'react';
import { BreakLine } from '../break-line/break-line.component';

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
                <BreakLine />
                <div className={css.content}>
                    <div className={css.iconContainer}>
                        <div className={css.icon} onClick={onTrashActivate} />
                    </div>
                    <div className={css.barContainer}>
                        <div className={css.barWrapper}>
                            <div
                                className={css.bar}
                                style={{ width: `${percent}%` }}
                            />
                        </div>
                        <div className={css.subscription}>
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
