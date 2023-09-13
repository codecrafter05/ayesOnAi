import React, { Fragment } from "react";
import LoginTabset from "./loginTabset";
import { ArrowLeft } from "react-feather";
import Slider from "react-slick";
import stats from "../../assets/images/dashboard/stats.png";
import "../../assets/scss/slick.scss";
import "../../assets/scss/slick-theme.scss";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

const Login = ({setUser}) => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		arrows: false,
	};
	const [credentials, setCredentials] = useState({
		email: '',
		password: ''
	  });
	  const [error, setError] = useState('');
	  const [loading, setLoading] = useState(false); 
	  const navigate = useNavigate();
	
	  function handleChange(evt) {
		setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
		setError('');
	  }
	
	  async function handleSubmit(evt) {
		evt.preventDefault();
		setLoading(true); 
	
		try {
		  const user = await usersService.login(credentials);
		  setUser(user);
		  navigate('/');
		  window.location.reload();
		} catch {
		  setError('Log In');
		} finally {
		  setLoading(false); 
		}
	}


	return (
		<Fragment>
			<div className="page-wrapper">
				<div className="authentication-box">
					<Container>
						<Row>
							<Col className="col-md-5 p-0 card-left">
								<Card className="bg-primary">
									<div className="svg-icon">
										<img alt="" src={stats} className="Img-fluid" />
									</div>
									<Slider className="single-item" {...settings}>
										<div>
											<div>
												<h3>Welcome to Multikart</h3>
												<p>
													Lorem Ipsum is simply dummy text of the printing and
													typesetting industry. Lorem Ipsum has been the
													industry's standard dummy.
												</p>
											</div>
										</div>
										<div>
											<div>
												<h3>Welcome to Multikart</h3>
												<p>
													Lorem Ipsum is simply dummy text of the printing and
													typesetting industry. Lorem Ipsum has been the
													industry's standard dummy.
												</p>
											</div>
										</div>
										<div>
											<div>
												<h3>Welcome to Multikart</h3>
												<p>
													Lorem Ipsum is simply dummy text of the printing and
													typesetting industry. Lorem Ipsum has been the
													industry's standard dummy.
												</p>
											</div>
										</div>
									</Slider>
								</Card>
							</Col>
							<Col className="col-md-7 p-0 card-right">
								<Card className="tab2-card">
									<CardBody>
										<LoginTabset setUser={setUser}/>
									</CardBody>
								</Card>
							</Col>
						</Row>
						<a
							href="https://multikart-react.vercel.app/"
							target="_blank"
							rel="noreferrer"
							className="btn btn-primary back-btn"
						>
							<ArrowLeft />
							back
						</a>
					</Container>
				</div>
			</div>
		</Fragment>
	);
};

export default Login;
