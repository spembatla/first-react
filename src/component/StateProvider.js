import React, { Component } from "react";
import { FILTER_ALL } from "../services/filters";
import { getAll, addToList, updateStatus } from "../services/todo";
import { objectWithOnly, wrapChildrenWith } from "../util/common";


class StateProvider extends Component {
    constructor() {
      super();
      this.state = {
        filter: FILTER_ALL,
        items: getAll(),
      };
    }
  
    render() {
      let children = wrapChildrenWith(this.props.children, {
        data: this.state,
        actions: objectWithOnly(this, ['addNew', 'changeFilter', 'changeStatus'])
      });
      return<div>{children}</div>;
    }
  
    addNew(text) {
      let updatedList = addToList(this.state.items, { text, completed: false });
  
      this.setState({ items: updatedList });
    }
  
    changeFilter(filter) {
      this.setState({ filter });
    }
  
    changeStatus(itemsId, completed) {
      const updatedList = updateStatus(this.state.items, itemsId, completed);
  
      this.setState({items: updatedList});
    }
  }

  export default StateProvider;