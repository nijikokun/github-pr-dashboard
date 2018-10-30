import React from 'react';
import moment from 'moment';

import '../../images/repo.svg';
import '../../images/git-pull-request.svg';

// import UserPhoto from './UserPhoto';
// import { Comments } from './Comments';
import { Status } from './Status';

const CLASS_BASE = 'pull-request';
const CLASS_UNMERGEABLE = `${CLASS_BASE} ${CLASS_BASE}--unmergeable`;
const CLASS_MERGEABLE = `${CLASS_BASE} ${CLASS_BASE}--mergeable`;

function getPrClassName(pr) {
  if (pr.unmergeable) {
    return CLASS_UNMERGEABLE;
  } else if (pr.mergeable) {
    return CLASS_MERGEABLE;
  }

  return CLASS_BASE;
}

export default class PullRequest extends React.Component {

  formatRelativeTime(date) {
    return moment(date).fromNow();
  }

  formatTime(header, date) {
    return `${header} ${moment(date).format('MMMM Do YYYY, h:mm:ss a')}`;
  }

  render() {
    const pr = this.props.pullRequest;
    const className = getPrClassName(pr);
    const status = pr.status || {};

    return (
      <div className={className}>
        <div className={['pull-request-status', status.state || 'na'].join(' ')}></div>
        <div className="pull-request-info">
          <div className="pull-request-title">
            <i className="fa fa-code-fork" aria-hidden="true"></i>
            <span className="pull-request-number">#{pr.number}</span>
            <a target="_blank" href={pr.url}>{pr.title}</a>
          </div>
          <div className="pull-request-details">
            <div className="pull-request-pr">
              <a target="_blank" href={pr.repoUrl}>
                <i className="fa fa-github" aria-hidden="true"></i>
                <label>{pr.repo}</label>
              </a>
              <Status status={pr.status} />
            </div>
            <div className="pull-request-created" title={this.formatTime('Created', pr.created)}>
              <i className="fa fa-user" aria-hidden="true"></i>
              <label>{pr.user.username} ({this.formatRelativeTime(pr.created)})</label>
            </div>
          </div>
        </div>
        <div
          className="pull-request-last-updated"
          title={this.formatTime('Last updated', pr.updated)}
        >
          {this.formatRelativeTime(pr.updated)}
        </div>
      </div>
    );
  }
}

PullRequest.propTypes = {
  pullRequest: React.PropTypes.object.isRequired
};
