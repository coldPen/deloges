
CREATE TABLE users (
    id BIGINT NOT NULL AUTO_INCREMENT,
    date_create TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    date_modify TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    login VARCHAR(100),
    user_type VARCHAR(100),
    email VARCHAR(100),
    phonenumber VARCHAR(100),
    name VARCHAR(100),
    firstname VARCHAR(100),
    genre VARCHAR(100),
    address TEXT,
    geolocalisation INT,
    rgpdack TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    password VARCHAR(100) DEFAULT NULL,
    PRIMARY KEY (`id`)
);


CREATE TABLE offers (
    id BIGINT NOT NULL AUTO_INCREMENT,
    date_create TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    date_modify TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_id BIGINT,
    offer_type VARCHAR(100),
    datestart TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    dateend TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    active TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    description TEXT,
    PRIMARY KEY (`id`)
);

CREATE TABLE asks (
    id BIGINT NOT NULL AUTO_INCREMENT,
    date_create TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    asker_id BIGINT,
    benevole_id BIGINT,
    offer_id BIGINT,
    message_id BIGINT,
    status VARCHAR(100),
    PRIMARY KEY (`id`)
);

CREATE TABLE messages (
    id BIGINT NOT NULL AUTO_INCREMENT,
    date_create TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    parent_id BIGINT,
    message_type VARCHAR(100),
    title TEXT,
    body TEXT,
    PRIMARY KEY (`id`)
);

