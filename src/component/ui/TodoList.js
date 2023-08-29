import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { applyFilter, search, FILTER_ACTIVE} from '../../services/filters';
import FilteredList from './FilteredList';
import Info from './Info';

function TodoList(props) {
  const { list, filter, mode, query} = props.data || {};
  const { addNew, changeFilter, changeStatus, changeMode, setSearchQuery } = props.actions || {};
  //const count = list && list.length || 0;
  const Count = applyFilter(list, FILTER_ACTIVE).length || 0;
  const items = search(applyFilter(list, filter), query);

  console.log('data ==> ', props);

  return (
    <div className='container'>
      <div className='row'>
        <div className='todolist'>
          <Header {...{addNew, mode, query, setSearchQuery}}/>
          <FilteredList {...{items, changeStatus}}/>
          <Footer {...{Count, filter, changeFilter, mode, changeMode}}/>
          <Info {...{mode}}/>
        </div>
      </div>
    </div>
  );
}

export default TodoList;