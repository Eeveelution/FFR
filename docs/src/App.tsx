import React from 'react';
import './App.css';
import ContentItem from './Components/ContentItem';
import InstructionFormat from './Components/InstructionFormat';
import { FmtEmpty, FmtRegisterOperation } from './InstructionFormats';
import { InstructionTableItem } from './Components/InstructionTableItem';
import { AsmInst, AssignFromTwo, HexLiteral, Literal, Predicate, Register } from './Components/AssemblyFormatComponents';

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
							<li><a href="#individual-insts-format">All Instruction Encodings</a></li>
							<li><a href="#instructions">Instructions</a></li>
							<li><a href="#assembler-syntax">Default Assembler Syntax</a></li>
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
								<AsmInst inst='cmpeq' />
								<AssignFromTwo op1={12} op2={13} dest={14} />
							</code>

							<br /> &nbsp;&nbsp;&nbsp;&nbsp;

							(Compare equality between r12 and r13, and put the result into r8)

							<br /><br />

							And afterwards there is a:

							<br /> &nbsp;&nbsp;&nbsp;&nbsp;

							<code>
								<Predicate n={8} />
								<AsmInst inst='mul' />
								<AssignFromTwo op1={31} op2={32} dest={33} />
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
									Register Operation (ALU/CMP/MOV) 
								</td>
								<td style={{ width: "100%" }}>
									<FmtRegisterOperation />
								</td>
							</tr>
						</table>
					</ContentItem>

					<ContentItem id='instructions' title='Instructions'>
						<FmtEmpty />

						<table style={{ width: "80%", marginLeft: "auto", marginRight: "auto", border: "1px solid white" }}>
							<tr>
								<td>Instruction</td>
								<td>Opcode</td>
								<td>Operation</td>
							</tr>
							<tr>
								<td>nop</td>
								<td>0</td>
								<td>nothing.</td>
							</tr>
						</table>

						<br/>

						<h2>Register Operation</h2>

						<FmtRegisterOperation />

						<table style={{ width: "80%", marginLeft: "auto", marginRight: "auto", border: "1px solid white" }}>
							<tr>
								<td>Instruction</td>
								<td>Opcode</td>
								<td>Type</td>
								<td>Operation</td>
							</tr>

							<InstructionTableItem name='mov'  opcode={1} extensions={[ "0" ]} operation='GR[dest] = GR[op1]'/>
							<InstructionTableItem name='f.mov' opcode={1} extensions={[ "1" ]} operation='FR[dest] = FR[op1]'/>

							<tr>
								<td>------</td>
								<td>Integer ALU</td>
								<td></td>
								<td></td>
							</tr>

							<InstructionTableItem name='add'  opcode={2} extensions={[ "0" ]}  operation='GR[op1] + GR[op2] = GR[dest]'/>
							<InstructionTableItem name='sub'  opcode={2} extensions={[ "1" ]}  operation='GR[op1] - GR[op2] = GR[dest]'/>
							<InstructionTableItem name='mul'  opcode={2} extensions={[ "2" ]}  operation='GR[op1] * GR[op2] = GR[dest]'/>
							<InstructionTableItem name='div'  opcode={2} extensions={[ "3" ]}  operation='GR[op1] * GR[op2] = GR[dest]'/>
							<InstructionTableItem name='bsl'  opcode={2} extensions={[ "4" ]}  operation='GR[op1] << GR[op2] = GR[dest]'/>
							<InstructionTableItem name='bsr'  opcode={2} extensions={[ "5" ]}  operation='GR[op1] >> GR[op2] = GR[dest]'/>
							<InstructionTableItem name='and'  opcode={2} extensions={[ "6" ]}  operation='GR[op1] & GR[op2] = GR[dest]'/>
							<InstructionTableItem name='or'   opcode={2} extensions={[ "7" ]}  operation='GR[op1] | GR[op2] = GR[dest]'/>
							<InstructionTableItem name='not'  opcode={2} extensions={[ "8" ]}  operation='GR[op1] ~ GR[op2] = GR[dest]'/>
							<InstructionTableItem name='xor'  opcode={2} extensions={[ "9" ]}  operation='GR[op1] ^ GR[op2] = GR[dest]'/>

							<tr>
								<td>------</td>
								<td>Integer ALU (with Immediates)</td>
								<td></td>
								<td></td>
							</tr>

							<InstructionTableItem name='add.i'  opcode={3} extensions={[ "0" ]}  operation='GR[op1] + imm = GR[dest]'/>
							<InstructionTableItem name='sub.i'  opcode={3} extensions={[ "1" ]}  operation='GR[op1] - imm = GR[dest]'/>
							<InstructionTableItem name='mul.i'  opcode={3} extensions={[ "2" ]}  operation='GR[op1] * imm = GR[dest]'/>
							<InstructionTableItem name='div.i'  opcode={3} extensions={[ "3" ]}  operation='GR[op1] * imm = GR[dest]'/>
							<InstructionTableItem name='bsl.i'  opcode={3} extensions={[ "4" ]}  operation='GR[op1] << imm = GR[dest]'/>
							<InstructionTableItem name='bsr.i'  opcode={3} extensions={[ "5" ]}  operation='GR[op1] >> imm = GR[dest]'/>
							<InstructionTableItem name='and.i'  opcode={3} extensions={[ "6" ]}  operation='GR[op1] & imm = GR[dest]'/>
							<InstructionTableItem name='or.i'   opcode={3} extensions={[ "7" ]}  operation='GR[op1] | imm = GR[dest]'/>
							<InstructionTableItem name='not.i'  opcode={3} extensions={[ "8" ]}  operation='GR[op1] ~ imm = GR[dest]'/>
							<InstructionTableItem name='xor.i'  opcode={3} extensions={[ "9" ]}  operation='GR[op1] ^ imm = GR[dest]'/>

							<tr>
								<td>------</td>
								<td> Comparisons</td>
								<td></td>
								<td></td>
							</tr>

							<InstructionTableItem name='cmpeq'   opcode={4} extensions={[ "0" ]} operation='GR[op1] == GR[op2] = GR[dest]'/>
							<InstructionTableItem name='cmpgt'   opcode={4} extensions={[ "1" ]} operation='GR[op1] > GR[op2] = GR[dest]'/>
							<InstructionTableItem name='f.cmpeq' opcode={4} extensions={[ "2" ]} operation='FR[op1] == FR[op2] = GR[dest]'/>
							<InstructionTableItem name='f.cmpgt' opcode={4} extensions={[ "3" ]} operation='FR[op1] > FR[op2] = GR[dest]'/>

							<tr>
								<td>------</td>
								<td> Memory Loads</td>
								<td></td>
								<td></td>
							</tr>

							<InstructionTableItem name='ldb'   opcode={5} extensions={[ "0" ]} operation='Loads 1 byte at address GR[op1] into GR[dest]'/>
							<InstructionTableItem name='lds'   opcode={5} extensions={[ "1" ]} operation='Loads 2 bytes at address GR[op1] into GR[dest]'/>
							<InstructionTableItem name='ldi'   opcode={5} extensions={[ "2" ]} operation='Loads 4 bytes at address GR[op1] into GR[dest]'/>
							<InstructionTableItem name='ldq'   opcode={5} extensions={[ "3" ]} operation='Loads 8 bytes at address GR[op1] into GR[dest]'/>
							<InstructionTableItem name='f.ld2' opcode={5} extensions={[ "4" ]} operation='Loads a 16-bit float at address GR[op1] into FR[dest]'/>
							<InstructionTableItem name='f.ld4' opcode={5} extensions={[ "5" ]} operation='Loads a 32-bit float at address GR[op1] into FR[dest]'/>
							<InstructionTableItem name='f.ld8' opcode={5} extensions={[ "6" ]} operation='Loads a 64-bit float at address GR[op1] into FR[dest]'/>

							<tr>
								<td>------</td>
								<td> Misc</td>
								<td></td>
								<td></td>
							</tr>

							<InstructionTableItem name='jmp' opcode={6} extensions={[ "0" ]} operation='IP = GR[op1]'/>
						</table>
					</ContentItem>

					<ContentItem id='assembler-syntax' title='Default Assembler Syntax'>
						<p>
							The Default FFR Assembler is used to assemble FFR Assembly Programs. 
							It outputs raw binary instructions, it does not package the program in ELF or PE or other formats.
						</p>

						<br />

						<p>
							<b>Registers</b> are prefixed with <span style={{ color: "coral" }}>$r</span>, for example <Register n={12} />, <Register n={31} />, etc.
						</p>

						<p>
							<b>Literals</b> are prefixed with <span style={{ color: "yellow" }}>#</span>, for example <Literal n={6969} />, <Literal n={1337} />, etc.
							<br/> There are also hexadecimal Literals which are prefixed with <span style={{ color: "yellow" }}>#x</span>, for example <HexLiteral n='8000' />, <HexLiteral n='AFAF' />
						</p>

						<p>
							<b>Predicates</b> come before the mnemonic for any assembly instruction, they go into parenthesis like this: <Predicate n={8} />
						</p>
					</ContentItem>
				</div>
			</div>
		</div>
	);
}

export default App;
