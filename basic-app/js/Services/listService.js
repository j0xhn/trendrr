var app = angular.module('trendrr');

app.factory('listService', function(){
	list.getList = function(){
		return {
			"17800862" : {
				"accessToken" : "CAADxvZBY3njQBAGUmOBM63wZC4poLecS3CodFouneshiHHFv39II1M2NxiI86HF19QxF9pCJEirFexsgVI3UuRZBPPiJOqrGZBaza184ufZBT5lhiZB8dlTrbb9zeAyoGpiAKDfUytebH7SMcUqFMdymBPOoZAHNnnH1j9w7jWgb49NNuR5tZBqb7c4WiZBnqSjMZD",
				"bio" : "yo yo",
				"dateCreated" : 1400360287875,
				"email" : "ericwilliamrea@gmail.com",
				"firstName" : "Eric",
				"fullName" : "Eric Rea",
				"gender" : "male",
				"id" : "17800862",
				"lastLogin" : 1400360287875,
				"lastName" : "Rea",
				"link" : "https://www.facebook.com/ericwilliamrea",
				"location" : "Provo, Utah",
				"overallVotes" : {
					"value" : 51
				},
				"picture" : "https://graph.facebook.com/17800862/picture?width=150&height=150",
				"votes" : {
					"fun" : {
						"tagName" : "fun",
						"value" : 10
					},
					"hello" : {
						"17800862" : {
							"type" : 1
						},
						"tagName" : "hello",
						"value" : 1
					},
					"hot" : {
						"tagName" : "hot",
						"value" : 10
					},
					"interesting" : {
						"tagName" : "interesting",
						"value" : 10
					},
					"iphone" : {
						"17800862" : {
							"type" : 1
						},
						"tagName" : "iphone",
						"value" : 1
					},
					"undefined" : {
						"17800862" : {
							"type" : 1
						},
						"value" : 1
					}
				}
			}
		}
	}
});


