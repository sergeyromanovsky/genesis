import React, { useEffect } from 'react';
import style from './style.module.scss';

import MainContentWrapper from '../../components/Layouts/MainContentWrapper';
import SideBarWrapper from '../../components/Layouts/SideBarWrapper';
import FirstPageSideBar from './SideBar';
import NewsList from './NewsList';

import { connect } from 'react-redux';
import { multiFilter } from '../../helpers/common';
import { updFiltered } from '../../ducks/main';

const FirstPage = ({ dispatch, initial, filters, paginated, filtered, totalPages, currPage }) => {
    useEffect(() => {
        const result = multiFilter(initial, filters);
        dispatch(updFiltered(result));
    }, [filters]);

    return (
        <section className={style.wrapper}>
            <SideBarWrapper>
                <FirstPageSideBar />
            </SideBarWrapper>
            <MainContentWrapper>
                {filtered.length > 0 ? (
                    <NewsList
                        currPage={currPage}
                        data={paginated}
                        filtered={filtered}
                        totalPages={totalPages}
                    />
                ) : (
                    <h3>Nothing was found </h3>
                )}
            </MainContentWrapper>
        </section>
    );
};

const mapStateToProps = ({ main, filters }) => ({
    initial    : main.initial,
    filtered   : main.filtered,
    paginated  : main.paginated,
    hasMore    : main.hasMore,
    totalPages : main.totalPages,
    currPage   : main.currPage,
    filters
});

export default connect(mapStateToProps)(FirstPage);
