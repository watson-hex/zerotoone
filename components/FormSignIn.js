import React from "react";
import PropTypes from "prop-types";
// import { Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import backend from "../env";
import axios from "../utilities/axios";
import Loading from "./Loading";

import Modal from "react-modal";

const Stage1 = (props) => {
  return (
    <>
      {/*content*/}
      {/*header*/}
      <div className="flex items-start justify-between pt-3 border-b border-solid border-blueGray-200 rounded-t">
        <h3 className="text-3xl font-semibold mb-2">Our Legal Agreement</h3>
      </div>
      {/*body*/}
      <div className="md:flex md:flex-col ">
        <div className="p-4 h-[18rem] md:h-[28rem] lg:h-[28rem] overflow-y-scroll">
          TNC-1 To sign in on a platform Member Conduct: Do not attempt to
          obtain unauthorized access to the services or to Oath’s servers,
          systems, networks, or data. Do not organize, promote hate speech. It’s
          unacceptable to attack a person or a community based on attributes
          such as their race, ethnicity, national origin, sex, gender, sexual
          orientation, religious affiliation, disabilities, etc. Do not make
          available any content that you do not have the right to make available
          or that infringes any patent, trademark, copyright, or other
          proprietary rights. Do not post content containing advertisements or
          other commercial solicitations without our prior written permission.
          Do not post/share any abusive, harassing, defamatory, vulgar, invasive
          to another’s privacy. Do not copy or reproduce or share any idea or
          information outside the community Who can use this Platform: All the
          students who are enrolled in any course and programme at IIITD can
          access the platform. Termination Clause: On becoming aware of any
          potential violation of the above-mentioned Terms&Conditions, we
          reserve all the rights(but shall have no obligation) to decide whether
          Content complied with the content requirements set out in these terms
          and may remove such content and/or terminate a User’s access for
          uploading content which is in violation of these terms at any time,
          without any prior notice. Any default arising out of the covenants of
          this agreement shall be prosecuted before competent authorities and be
          liable for legal consequences.
        </div>
      </div>
      {/*footer*/}
      <div className="flex items-center justify-end pt-6 pr-6 border-t border-solid border-blueGray-200 rounded-b">
        <button
          className="bg-[#538EE1]/[0.8] text-white active:bg-[#538EE1] font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
          type="button"
          onClick={() => {
            props.handleNextInternal();
          }}
        >
          Accept and Submit
        </button>
      </div>
    </>
  );
};

const customStyles = {
  content: {
    top: "40%",
    left: "50%",
    right: "20%",
    bottom: "10%",
    marginRight: "",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#mylayout");
class FormSignIn extends React.Component {
  static propTypes = {
    emailId: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    onSubmit: PropTypes.func,
  };

  static defaultProps = {
    onSubmit: undefined,
  };

  constructor(props) {
    super(props);
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeDegree = this.handleChangeDegree.bind(this);
    this.handleChangeCourse = this.handleChangeCourse.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      FirstName: this.props.firstName,
      LastName: this.props.lastName,
      email: this.props.emailId,
      degree: "",
      course: "",
      isLoading: false,
      currentModal: true,
      internalStage: 0,
    };
  }

  // noinspection JSCheckFunctionSignatures
  shouldComponentUpdate() {
    return true;
  }

  handleChangeFirstName(e) {
    this.setState({ FirstName: e.target.value });
  }

  handleChangeLastName(e) {
    this.setState({ LastName: e.target.value });
  }

  handleChangeDegree(e) {
    this.setState({ degree: e.target.value });
  }

  handleChangeCourse(e) {
    this.setState({ course: e.target.value });
  }

  handleCloseModal() {
    this.setState({
      currentModal: false,
    });
  }

  // handle next class method to update the internal stage by one from the previous stage
  handleNextInternal() {
    this.setState((prevState) => ({
      internalStage: {
        ...(prevState.internalStage + 1),
      },
    }));
  }

  handleSubmit(e) {
    this.handleCloseModal;
    this.setState({ isLoading: true });

    let payload = {
      First_Name: this.state.FirstName,
      Last_Name: this.state.LastName,
      degree: this.state.degree,
      course: this.state.course,
    };

    axios.post(backend + "connect/profile/", payload).then((res) => {
      localStorage.setItem("id", res.data.id);
      this.props.onSubmit();
    });

    this.setState({
      FirstName: "",
      LastName: "",
      degree: "",
      course: "",
    });
    e.preventDefault();
  }

  render() {
    if (this.state.isLoading) return <Loading />;
    else
      return (
        <div className="">
          <Modal
            // className="bg-black"
            isOpen={true}
            // onAfterOpen={afterOpenModal}
            // onRequestClose={closeModal}
            // style={customStyles}
            className="m-3 drop-shadow-md rounded-3xl bg-white p-4 md:w-2/6 md:h-5/6 mx-auto md:mt-12 "
            contentLabel="Example Modal"
          >
            <div className="">
              {this.state.internalStage === 0 ? (
                <Stage1
                  handleNextInternal={this.handleNextInternal.bind(this)}
                />
              ) : (
                <>
                  <span className="text-3xl text-center p-3">
                    Lets get you started
                  </span>
                  <form
                    className="px-6 pt-4 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8"
                    action="#"
                  >
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        First Name
                      </label>
                      <input
                        onChange={this.handleChangeFirstName}
                        placeholder="name input"
                        type="text"
                        value={this.state.FirstName}
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Email Address:
                      </label>
                      <input
                        disabled
                        type="email"
                        value={this.state.email}
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Degree:
                      </label>
                      <select
                        className="text-lg indent-4 rounded-xl shadow-inner outline-2 outline-slate-50 w-4/5"
                        onChange={this.handleChangeDegree}
                        required
                      >
                        <option value="" defaultChecked>
                          ---Select Degree---
                        </option>

                        <option value="M">M-Tech</option>
                        <option value="B">B-Tech</option>

                        <option value="P">Ph.D.</option>
                        <option value="F">Faculty</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Degree:
                      </label>
                      <select
                        className="text-lg indent-4 rounded-xl shadow-inner outline-2 outline-slate-50 w-4/5"
                        onChange={this.handleChangeCourse}
                        required={this.state.course === "B"}
                        value={this.state.course}
                      >
                        <option value="" defaultChecked>
                          ---Select Course---
                        </option>

                        <option value="CSAI">CSAI</option>

                        <option value="CSE">CSE</option>

                        <option value="CSB">CSB</option>

                        <option value="CSD">CSD</option>

                        <option value="CSSS">CSSS</option>

                        <option value="CSAM">CSAM</option>

                        <option value="ECE">ECE</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-end p-6 pb-0 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="bg-[#538EE1]/[0.8] text-white active:bg-[#538EE1] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        onClick={this.handleSubmit}
                        type="submit"
                        value="Submit"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </Modal>
        </div>
        // <Modal
        //   aria-labelledby="example-custom-modal-styling-title"
        //   backdrop="static"
        //   dialogClassName="modal-100w"
        //   handleClose={this.handleCloseModal.bind(this)}
        //   keyboard={false}
        //   show={this.state.currentModal}
        //   className=""
        // >
        //   <Modal.Header className="bg-dark">
        //     <Modal.Title className="text-light">
        //       Let&apos;s Create your Profile Amigo!!
        //     </Modal.Title>
        //   </Modal.Header>

        //   <Modal.Body className="bg-dark">
        //     <Form.Group>
        //       <Form.Label>
        //         <div className="text-danger float-start">*</div>

        //         <span className="text-light"> First Name: </span>
        //       </Form.Label>

        //       <Form.Control
        //         className="form-control bg-secondary text-white border-secondary border-1"
        //         onChange={this.handleChangeFirstName}
        //         placeholder="name input"
        //         type="text"
        //         value={this.state.FirstName}
        //       />

        //       <br />

        //       <Form.Label className="text-light">Last Name: </Form.Label>

        //       <Form.Control
        //         className="form-control bg-secondary text-white border-secondary border-1"
        //         onChange={this.handleChangeLastName}
        //         placeholder="name input"
        //         type="text"
        //         value={this.state.LastName}
        //       />

        //       <br />

        //       <Form.Label className="text-light">Email Address: </Form.Label>

        //       <Form.Control
        //         className="form-control disabled bg-secondary text-white border-secondary border-1"
        //         disabled
        //         type="email"
        //         value={this.state.email}
        //       />

        //       <br />

        //       <Form.Label>
        //         <span className="text-light"> Degree: </span>
        //       </Form.Label>

        //       <Form.Select
        //         className="form-control required bg-secondary text-white border-secondary border-1"
        //         onChange={this.handleChangeDegree}
        //         required
        //         value={this.state.degree}
        //       >
        //         <option value="">---Select Degree---</option>

        //         <option value="M">M-Tech</option>

        //         <option value="B">B-Tech</option>

        //         <option value="P">Ph.D.</option>

        //         <option value="F">Faculty</option>
        //       </Form.Select>

        //       <br />

        //       <Form.Label>
        //         <span className="text-light"> Course: </span>
        //       </Form.Label>

        //       <Form.Select
        //         className="form-control required bg-secondary text-white border-secondary border-1"
        //         onChange={this.handleChangeCourse}
        //         required={this.state.course === "B"}
        //         value={this.state.course}
        //       >
        //         <option value="">---Select Course---</option>

        //         <option value="CSAI">CSAI</option>

        //         <option value="CSE">CSE</option>

        //         <option value="CSB">CSB</option>

        //         <option value="CSD">CSD</option>

        //         <option value="CSSS">CSSS</option>

        //         <option value="CSAM">CSAM</option>

        //         <option value="ECE">ECE</option>
        //       </Form.Select>
        //     </Form.Group>
        //   </Modal.Body>

        //   <Modal.Footer className="bg-dark">
        //     <div className="text-danger float-start">* Required</div>

        //     <button
        //       className="btn btn-primary"
        //       onClick={this.handleSubmit}
        //       type="submit"
        //       value="Submit"
        //     >
        //       Submit
        //     </button>
        //   </Modal.Footer>
        // </Modal>
      );
  }
}

export default FormSignIn;

// <Modal.Body className="bg-dark">
//                     <Modal.Title className='bg-light'>
//                         Set up your Profile
//                     </Modal.Title>
//
//                     <form
//                         className="form-group"
//                         onSubmit={this.handleSubmit}
//                     >
//
//
//                         <div className="row">
//                             <div className="col">
//                                 <div className="row required">
//
//                                     <label className="col-auto form-text" >
//                                         First Name:
//                                     </label>
//
//
//                                     <input
//                                         className="form-control"
//                                         onChange={this.handleChangeFirstName}
//                                         required
//                                         type='text'
//                                         value={this.state.FirstName}
//                                     />
//
//
//                                 </div>
//
//                                 <br />
//
//                                 <div className="row required">
//
//                                     <label className="col-auto form-text">
//                                         Last Name:
//                                     </label>
//
//                                     <input
//                                         className="form-control"
//                                         onChange={this.handleChangeLastName}
//                                         required
//                                         type='text'
//                                         value={this.state.LastName}
//                                     />
//
//
//                                 </div>
//
//                                 <br />
//
//                                 <div className="row required">
//
//                                     <label className="col-auto form-text">
//                                         Email Address:
//                                     </label>
//
//                                     <input
//                                         className="form-control disabled"
//                                         disabled
//                                         type="email"
//                                         value={this.state.email}
//                                     />
//
//                                 </div>
//
//                                 <br />
//
//                                 <div className="row required justify-content-center">
//                                     <div className="col-auto">
//                                         <label className="form-text">
//                                             Degree:
//                                         </label>
//
//                                         <select
//                                             className="form-control"
//                                             onChange={this.handleChangeDegree}
//                                             required
//                                             value={this.state.degree}
//                                         >
//                                             <option
//                                                 value=""
//                                             >
//                                                 ---Select Degree---
//                                             </option>
//
//                                             <option value="M" >
//                                                 M-Tech
//                                             </option>
//
//                                             <option value="B">
//                                                 B-Tech
//                                             </option>
//
//                                             <option value="P">
//                                                 Ph.D.
//                                             </option>
//
//                                             <option value="F">
//                                                 Faculty
//                                             </option>
//
//                                         </select>
//                                     </div>
//
//                                     <div className="col-auto">
//                                         <label className="form-text">
//                                             Course:
//                                         </label>
//
//                                         <select
//                                             className="form-control"
//                                             onChange={this.handleChangeCourse}
//                                             required={this.state.degree==="B"}
//                                             value={this.state.course}
//                                         >
//
//                                             <option
//                                                 value=""
//                                             >
//                                                 ---Select Course---
//                                             </option>
//
//                                             <option value="CSAI">
//                                                 CSAI
//                                             </option>
//
//                                             <option value="CSE">
//                                                 CSE
//                                             </option>
//
//                                             <option value="CSB">
//                                                 CSB
//                                             </option>
//
//                                             <option value="CSD">
//                                                 CSD
//                                             </option>
//
//                                             <option value="CSSS">
//                                                 CSSS
//                                             </option>
//
//                                             <option value="CSAM">
//                                                 CSAM
//                                             </option>
//
//                                             <option value="ECE">
//                                                 ECE
//                                             </option>
//
//                                         </select>
//                                     </div>
//
//
//                                 </div>
//
//                                 <br />
//
//                                 <br />
//
//                                 <button
//                                     className="btn btn-primary"
//                                     onChange={this.handleChange}
//                                     type="submit"
//                                     value="Submit"
//                                 >
//                                     Submit
//                                 </button>
//
//                                 <div className="text-danger float-left">
{
  /*                                    * Required*/
}
{
  /*                                </div>*/
}

{
  /*                            </div>*/
}
{
  /*                        </div>*/
}
{
  /*                    </form>*/
}
{
  /*                </Modal.Body>*/
}
