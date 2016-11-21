function UserProfile() {
	return {
		transclude: {
			name: 'h4',
			position: 'h6',
			description: 'p'
		},
		template: [
			'<div>',
				'<h3>User Profile</h3>',
				'<label>Name:</label><span ng-transclude="name"></span>',
				'<label>Position:</label><span ng-transclude="position"></span>',
				'<label>Description:</label><span ng-transclude="description"></span>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);
