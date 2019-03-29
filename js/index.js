function getChallengeRepository() {
	let username = document.getElementById('username').value;
	const req = new XMLHttpRequest();
	req.addEventListener('load', displayCommits);
	req.open('GET', 'https://api.github.com/repos/'+ username + '/daily_standup_challenge' + '/commits');
	req.send();
}



function displayCommits() {
		let username = document.getElementById('username').value;

	document.getElementById('users').innerHTML = username
	const commits = JSON.parse(this.responseText);
	console.log(commits)
	
	const commitsList = `<ul>${commits.map(
		commit => '<li>' + commit.commit.message + '</li>'
		).join('')}</ul>`;
	document.getElementById('commits').innerHTML = commitsList;

	const timeStamps = `<ul>${commits.map(
		commit => '<li>' + commit.commit.author.date + '</li>'
		).join('')}</ul>`;
	document.getElementById('timestamp').innerHTML = timeStamps;
}