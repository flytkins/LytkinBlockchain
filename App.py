import flask
import json

app = flask.Flask(__name__)
app.config['SECRET_KEY'] = 'Ethereum'

with open('users.json','r', encoding='utf-8') as f:
    users = json.load(f)

@app.route('/', methods=['GET','POST'])
def index():
    if flask.request.method == 'POST':
        l = flask.request.form['login']
        p = flask.request.form['pwd']
        if l in users and users[l]['pwd'] == p:
            flask.session['username'] = l;
            if users[l]['role'] == 1:
                return flask.render_template('seller.html', user=users[l])
            else:
                return flask.render_template('customer.html', user=users[l])
        else:
            return flask.render_template('index.html', error='Логин или пароль неверен!')
    return flask.render_template('index.html')

@app.route('/logout')
def logout():
    flask.session.pop('username')
    return flask.redirect(flask.url_for('index'))
