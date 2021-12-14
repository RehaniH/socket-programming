"""
WSGI config for socket_example project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

#new
import socketio
from socket_app.views import sio
import eventlet
import eventlet.wsgi
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'socket_example.settings')

#application = get_wsgi_application()

#new
django_app = get_wsgi_application()
application = socketio.WSGIApp(sio, django_app)
#

eventlet.wsgi.server(eventlet.listen(('', 8000)), application)