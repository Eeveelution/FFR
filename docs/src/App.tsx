import React from 'react';
import './App.css';
import ContentItem from './Components/ContentItem';
import InstructionFormat from './Components/InstructionFormat';

function App() {
	return (
		<div className="app">
			<div className="main-content">
				<div className='inner-content'>
					<ContentItem id='top' title='FFR Wiki'>

						<p>
							This is a Wiki which displays all information about the FFR Architecture. <br />
							Here's a Table of contents for easy browsing:
						</p>

						<ul>
							<li><a href="#about">About FFR</a></li>
							<li><a href="#inst-format">Instruction Format</a></li>
						</ul>
					</ContentItem>

					<ContentItem id='about' title='About FFR'>
						<p>
							FFR (Furball Fluffy RISC) is a Architecture designed my Furball,
							This is mainly for

							<b style={{ color: "coral" }}> educational purposes </b>

							and to explore FPGA development.
							FPGAs seem to be the best route for me as a Software Developer to get into hardware,
							I've tried Arduino and things like that but I never really had a compelling
							project I wanted to do on those. and a FPGA is literally a programmable chip,
							which makes it perfect for

							<b style={{ color: "coral" }}> custom CPUs and GPUs </b>

							which are projects that I'd actally be interested in.

							<br /><br />

							FFR takes alot of things from other Architectures that I like,
							like <b style={{ color: "coral" }}>Alpha</b>  and <b style={{ color: "lightseagreen" }}>Itanium</b>.
							Like a Predicate for each instruction (taken from Itanium),
							aswell as the lack of a Flags register (taken from Alpha).
							I've basically taken the things that in my opinion make for a good CPU Architecture,
							I liked the

							<b style={{ color: "purple" }}> Qualifying Predicate </b>

							from Itanium because it allows for any instruction to be
							a Conditional instruction, making pipelining easier, as a small branch would no longer
							have to cause a pipeline stall/reset.

							I liked the lack of flags register because it makes Multi CPU/Multi-core implementations easier,
							as they won't have to rely on a shared flags register, reducing the amount that the flags register
							is used. (Also it will make implementation in verilog easier, as it's 1 less register I have to worry about)
						</p>
					</ContentItem>

					<ContentItem id='inst-format' title='Instruction Formatting'>
						<p>
							FFR Instructions are all 64-bit (8 bytes) in size. The base Instruction Encoding common for all instructions,
							is a 6-bit Predicate, and a 8-bit opcode. The Predicate is used for conditional instructions, every Instruction
							can be executed conditionally, the 6-bit Predicate is an Index into the General Register File.
							If let's say there is a:

							<br /> &nbsp;&nbsp;&nbsp;&nbsp;

							<code>
								<span style={{ color: "greenyellow" }}> cmpeq</span>
								<span style={{ color: "coral" }}> r12</span>,
								<span style={{ color: "coral" }}> r13</span> =
								<span style={{ color: "coral" }}> r8</span>
							</code>

							<br /> &nbsp;&nbsp;&nbsp;&nbsp;

							(Compare equality between r12 and r13, and put the result into r8)

							<br /><br />

							And afterwards there is a:

							<br /> &nbsp;&nbsp;&nbsp;&nbsp;

							<code>
								<span style={{ color: "blueviolet" }}> (8) </span>
								<span style={{ color: "greenyellow" }}>mul</span>
								<span style={{ color: "coral" }}> r31</span>,
								<span style={{ color: "coral" }}> r32 </span> =
								<span style={{ color: "coral" }}> r33 </span>
							</code>

							<br /> &nbsp;&nbsp;&nbsp;&nbsp;

							(Multiply r31 by r32 and store result in r33)

							<br /><br />

							The multiply instruction will only execute if General Register 8 is equal to or above 1.

							<br/><br/>

							This is the Base Instruction Encoding:

							<InstructionFormat totalSize={64} elements={[
								{ name: "Opcode",               size: 8,  color: "coral", lightColor: true },
								{ name: "Instruction Specific", size: 50, color: "gray" },
								{ name: "Predicate",            size: 6,  color: "purple" },
							]} />
						</p>
					</ContentItem>

					<ContentItem id='individual-insts-format' title='All Instruction Encodings'>
						The base instruction encoding is not included, however offsets are with consideration of the base encoding.
						<table>
							<tr>
								<td style={{ minWidth: "150px"}}>
									ALU Operation 
									<br/>(add, sub, mul, div)
									<br/>(bsr, bsl, and, or)
									<br/>(xor, not)
								</td>
								<td style={{ width: "100%" }}>
									<InstructionFormat totalSize={50} offset={-6} elements={[
										{ name: "ALU Op",  size: 4,  color: "cyan", lightColor: true },
										{ name: "Opperand 1",  size: 6,  color: "green" },
										{ name: "Opperand 2",  size: 6,  color: "green" },
										{ name: "Destination", size: 6,  color: "orange", lightColor: true },
										{ name: "Remaining",   size: 28, color: "gray" },
									]} />
								</td>
							</tr>
						</table>
					</ContentItem>
				</div>
			</div>
		</div>
	);
}

export default App;
