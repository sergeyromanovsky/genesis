import React from 'react';
import style from './style.module.scss';

import SourceItem from './Item';

const itemList = (arr) => arr.map((item) => <SourceItem key={item.id} item={item} />);

const SecondPageSidebar = ({ data }) => (
    <div className={style.wrapper}>
        <h3 className={style.heading}>Filtered Sources</h3>
        {itemList(data)}
    </div>
);

export default SecondPageSidebar;
