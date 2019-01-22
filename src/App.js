import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notifications, { notify } from 'react-notify-toast';
import SearchBar from './modules/search/components/SearchBar';
import ResultsTable from './modules/results/components/ResultsTable';
import Loading from './modules/UI/components/Loading';
import { getLoading } from './modules/UI/selectors';

export class App extends Component {
  componentDidUpdate() {
    if (this.props.toastType === 'error') {
      notify.show(this.props.message, 'error');
    }

    if (this.props.toastType === 'success') {
      notify.show(this.props.message, 'success');
    }
  }

  render() {
    return (
      <div className="App">
        <Notifications />
        <div className="container">
          {this.props.isLoading ? <Loading id="loading" /> : ''}
          <SearchBar id="searchBar" />
          <ResultsTable />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: getLoading(state),
    message: state.toast.message,
    toastType: state.toast.type,
  };
};
export default connect(mapStateToProps)(App);
