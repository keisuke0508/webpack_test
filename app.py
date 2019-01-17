# -*- coding:utf-8 -*-

from flask import Flask, render_template
import os
import json

app = Flask(__name__)
app.secret_key = os.urandom(24)


@app.route("/", methods=["GET"])
def get():
    static_file_verison_json = json.load(open("static_file_version.json", "r"))
    static_file_version = static_file_verison_json.get("version")
    return render_template(
        "index.html",
        static_file_version=static_file_version
    )


if __name__ == "__main__":
    app.run()
