module.exports = {
	remoteDB: process.env.REMOTE_DB || false,
	api: {
		port: process.env.API_PORT || 3000,
	},
	post: {
		port: process.env.POST_PORT || 3002,
	},
	jwt: {
		secret: process.env.JWT_SECRET || "notasecret!",
	},
	mysql: {
		host: process.env.MYSQL_HOST || "",
		user: process.env.MYSQL_USER || "aVM5t1Fgm2",
		password: process.env.MYSQL_PWD || "DPJgJbz7ZY",
		database: process.env.MYSQL_DB || "aVM5t1Fgm2",
	},
	mysqlService: {
		host: process.env.MYSQL_SRV_PORT || "localhost",
		port: process.env.MYSQL_SRV_PORT || 3001,
	},
};
