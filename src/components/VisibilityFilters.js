import React from 'react';
import cs from 'classnames';
import { setFilter } from '../redux/actions';
import { VISIBILITY_FILTERS } from '../constants';
import { connect } from 'react-redux';


const VisibilityFilters = ({activeFilter, setFilter}) => {
    return (
        <div className="visibility-filters">
            {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
                const currentFilter = VISIBILITY_FILTERS[filterKey];
                return (
                    <span 
                     key={`visibility-filter-${currentFilter}`}
                     className={cs(
                         "filter",
                         currentFilter === activeFilter && "filter--active"
                     )}
                     onClick={() => {
                         setFilter(currentFilter);
                     }}
                    >
                        {currentFilter}
                    </span>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {activeFilter: state.visibilityFilter}
}
export default connect(mapStateToProps, { setFilter })(VisibilityFilters);