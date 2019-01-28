# -*- coding:utf-8 -*-

from flask import Flask, render_template
import os
import json

from static_file_version import VERSION

app = Flask(__name__)
app.secret_key = os.urandom(24)


@app.route("/", methods=["GET"])
def get():
    # json
    # static_file_verison_json = json.load(open("static_file_version.json", "r"))
    # static_file_version = static_file_verison_json.get("version")

    # python
    static_file_version = VERSION
    return render_template(
        "index.html",
    )

@app.context_processor
def static_file_version_context_processor():
    return {
        "static_file_version": VERSION
    }


if __name__ == "__main__":
    app.run()
