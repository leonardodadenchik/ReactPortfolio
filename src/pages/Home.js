import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import "../styles/Home.css"
function Home() {
	return (
		<div className="home">
			<div className="about">
				<h2> Hi, my name is Denys Popichko</h2>
				<div className="prompt">
					<p> An experienced Web and Native JavaScript developer</p>
					<LinkedInIcon/>
					<GitHubIcon/>
				</div>
			</div>
			<div className="skills">
				<h1>Skills</h1>
				<ol className="list">
					<li className="item">
						<h2>Front-End</h2>
						<span>I have actively used and contributed to open source software both for personal learning
							and in collaborative projects. On the user side, I frequently rely on open source libraries
							and tools such as Git, VS Code, and various JavaScript and Python packages (e.g., React,
							Flask, NumPy) to build and enhance my projects.</span>
					</li>
					<li className="item">
						<h2>Back-End</h2>
						<span>I have actively used and contributed to open source software both for personal learning
							and in collaborative projects. On the user side, I frequently rely on open source libraries
							and tools such as Git, VS Code, and various JavaScript and Python packages (e.g., React,
							Flask, NumPy) to build and enhance my projects.</span>
					</li>
					<li className="item">
						<h2>Native Development</h2>
						<span>I have actively used and contributed to open source software both for personal learning
							and in collaborative projects. On the user side, I frequently rely on open source libraries
							and tools such as Git, VS Code, and various JavaScript and Python packages (e.g., React,
							Flask, NumPy) to build and enhance my projects.</span>
					</li>
				</ol>
			</div>
		</div>
	)
}

export default Home