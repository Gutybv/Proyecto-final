from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def get_uuid():
    return uuid4().hex

class User(db.Model):

    __tablename__ = "users"
    id = db.Column(db.String(32), primary_key=True, unique=True, default=get_uuid)
    email = db.Column(db.String(120), unique=True,)
    password = db.Column(db.String(80), nullable=False)
  

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }