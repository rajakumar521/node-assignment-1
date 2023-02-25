const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	await fs.writeFile(fileName, fileContent)
	// dont chnage function name
}

const myFileReader = async (fileName) => {
	// write code here
	const data = await fs.readFile(fileName, "utf-8")
	console.log(data)
	// dont chnage function name
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	await fs.appendFile(fileName, fileContent)
	// dont chnage function name
}

const myFileDeleter = async (fileName) => {
	// write code here
	await fs.unlink(fileName)
	// dont chnage function name
}

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }