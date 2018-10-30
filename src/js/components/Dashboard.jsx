import React from 'react';
import { connect } from 'react-redux';
import PullRequest from './PullRequest';
import LoadingOverlay from './LoadingOverlay';
import ErrorMessage from './ErrorMessage';
import Toolbar from './Toolbar';
import Footer from './Footer';

class Main extends React.Component {

  renderLoading() {
    if (this.props.loading) {
      return (
        <LoadingOverlay />
      );
    }

    return null;
  }

  renderFailedRepos() {
    if (this.props.failedRepos.length) {
      return (
        <div>
          {this.props.failedRepos.map(failedRepo =>
            <ErrorMessage
              key={failedRepo}
              message={`Failed to load pull request data for ${failedRepo}.`}
            />
          )}
        </div>
      );
    }

    return null;
  }

  renderBody() {
    if (this.props.error) {
      return <ErrorMessage message={this.props.error} />;
    }

    return (
      <div className="pull-requests">
        {this.renderFailedRepos()}
        {this.renderLoading()}
        {this.props.pullRequests.map(pr =>
          <div className="pull-request-container" key={pr.id}>
            <PullRequest key={pr.id} pullRequest={pr} />
          </div>
        )}
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <div className="container-header">
          <Toolbar failedRepos={this.props.failedRepos} />
        </div>
        {this.renderBody()}
        <Footer />
      </div>
    );
  }
}

Main.propTypes = {
  loading: React.PropTypes.bool.isRequired,
  pullRequests: React.PropTypes.array.isRequired,
  repos: React.PropTypes.array.isRequired,
  title: React.PropTypes.string.isRequired,
  failedRepos: React.PropTypes.array.isRequired,
  error: React.PropTypes.string.isRequired
};

export default connect(state => state)(Main);
