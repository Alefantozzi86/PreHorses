import os
from flask_admin import Admin
from api.models.db import db
from api.models.user import User
from api.models.horse import Horse
from api.models.message import Message
from api.models.ganaderia import Ganaderia
from flask_admin.contrib.sqla import ModelView
from datetime import timedelta


ACCESS_EXPIRES = timedelta(hours=2)

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Horse, db.session))
    admin.add_view(ModelView(Message, db.session))
    admin.add_view(ModelView(Ganaderia, db.session))
    

    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))