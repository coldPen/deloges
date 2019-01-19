
CREATE TABLE users (
    id BIGINT,
    date_create TIMESTAMP,
    date_modify TIMESTAMP,
    login TEXT,
    user_type VARCHAR(100),
    email TEXT,
    phonenumber VARCHAR(100),
    name TEXT ,
    firstname TEXT,
    genre VARCHAR(100),
    address TEXT,
    geolocalisation SPATIAL,
    rgpdack TIMESTAMP,
);


CREATE TABLE offers (
    id BIGINT,
    date_create TIMESTAMP,
    date_modify TIMESTAMP,
    user_id BIGINT,
    offer_type VARCHAR(100),
    datestart TIMESTAMP,
    dateend TIMESTAMP,
    active TIMESTAMP,
    description TEXT,
);

CREATE TABLE asks (
    id BIGINT,
    date_create TIMESTAMP,
    asker_id BIGINT,
    benevole_id BIGINT,
    offer_id BIGINT,
    message_id BIGINT,
    status VARCHAR(100),
);

CREATE TABLE messages (
    id BIGINT,
    date_create TIMESTAMP,
    parent_id BIGINT,
    message_type VARCHAR(100),
    title TEXT,
    body TEXT,
);

