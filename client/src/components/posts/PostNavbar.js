import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getPosts, getEmailPosts } from '../../actions/postActions';
import { connect } from 'react-redux';
// import SelectListGroup from '../common/SelectListGroup';
// import SelectListGroup from '../common/SelectListGroup';
import SelectListGroup from '../common/SelectListGroup';

class PostNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: ''
      // text: '',
      // errors: {}
    };

    this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    // this.props.getPosts();
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });

    this.props.getPostsToDisplay(e.target.value);
  }

  render() {
    const typeOptions = [
      {
        label: 'Choose',
        value: ''
      },
      {
        label: 'Email',
        value: 'email'
      },
      {
        label: 'SMS',
        value: 'sms'
      },
      {
        label: 'Landing Page',
        value: 'website'
      },
      {
        label: 'Other',
        value: 'Other'
      }
    ];

    return (
      <div style={{ backgroundColor: 'white' }}>
        <div className="container">
          <nav
            className="navbar navbar-expand-lg"
            style={{ backgroundColor: 'white' }}
          >
            {/* <a className="navbar-brand" href="#">
                Navbar
              </a> */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item mr-2">
                  {/* <a className="nav-link" href="#">
                    Link
                  </a> */}
                  {/* <select className="custom-select">
                    <option selected>All Types</option>
                    <option value="1">Emails</option>
                    <option value="1">SMS</option>
                    <option value="1">Landing Pages</option> */}

                  {/* <option value="2">Two</option>
                      <option value="3">Three</option> */}
                  {/* </select> */}

                  <SelectListGroup
                    placeholder="type"
                    name="type"
                    value={this.state.type}
                    onChange={this.onChange}
                    options={typeOptions}
                    // error={errors.status}
                    info="Give us an idea of where you are in your career :)"
                  />
                </li>
              </ul>

              <Link to="add-post" className="btn btn-info mr-1">
                Add Copy
              </Link>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post
});
// export default ;

export default connect(mapStateToProps, { getPosts, getEmailPosts })(
  PostNavbar
);
