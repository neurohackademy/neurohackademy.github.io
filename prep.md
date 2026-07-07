---
layout: default
---

# Preparing for NeuroHackademy

This page contains information for preparing for NeuroHackademy! Not everything
suggested on this page is required; we expect you to chart your own path
through the program, with this page serving as a convenient reference.

Setup and Technical Information NeuroHackademy uses a
[JupyterHub](https://jupyter.org/hub) cloud-computing server for lecture
materials and hack projects. The JupyterHub provides an interface to Jupyter
notebooks and terminals running on virtual machines remotely in the cloud. We
have provisioned these virtual machines to have all of the software tools and
configuration details that we typically need for projects in the course, and
the machines should have plenty of computing power and memory for our purposes.

Critically, because we use remote virtual machines, you do not need to do
anything to setup your laptop for the course aside from having a contemporary
web-browser installed. If you would like to install tools like Python, the
terminal/shell, and git on your local laptop, [this page, maintained by the
Carpentries organization, has instructions for installing these tools
locally](https://carpentries.github.io/workshop-template/install_instructions/).

To connect to the JupyterHub, direct your browser to
[https://neurohackademy.2i2c.cloud/](https://neurohackademy.2i2c.cloud/). Authentication
is performed using your GitHub credentials, so after clicking the “Log In to
Continue” button followed by the “Log On” button, you should be prompted for
your GitHub username and password.

## Logistics

Logistical information about travel, housing, and internet can be found on
[the Logistics Page]({{site.baseutl}}/logistics)!

## Review Resources

You do not need to review any particular material prior to the
NeuroHackademy&mdash;for topics like Python programming we will have lectures
in two tracks: introductory Python and advanced topics. However, if you are
interested in brushing up on some of the topics we cover, here are some useful
resources.

### Software Carpentry

The Carpentries is a not-for-profit organization that publishes and administers
public lessons on basic data science tools. [The Software Carpentry lessons
website](https://software-carpentry.org/lessons) contains a listing of their
basic lessons on the UNIX shell (also frequently called BASH or the terminal),
Python, Git/GitHub, and R. These lessons are written with commentary so that
individuals can walk through them on their own, but it is also fairly easy to
find in-person recordings of these lessons as lectures via YouTube (just search
for “Software Carpentry”).

### Python Data Science Handbook

This book, by Jake VanderPlas, is a somewhat more advanced reference for data
science topics in Python. It is highly recommended for intermediate and
advanced scientist programmers, and it is open source. [This page has basic
information about the book](
https://github.com/jakevdp/PythonDataScienceHandbook), including a link to a
free version online.

### Previous NeuroHackademy Lectures

Most of the lectures from previous years of the NeuroHackademy were recorded
and can be viewed on YouTube. These lectures are organized by year and schedule
on the [neurohackademy.org website's lecture archive](
{{site.baseurl}}/archive). Here are several of the past lectures organized by
topic rather than year; note that this list is mainly focused on basic data
science skills, so past lectures on specific neuroscience topics may not be
shown.

#### Git and GitHub
* [Version Control with Git and GitHub (Elizabeth DuPre, 2020)](https://www.youtube.com/watch?v=ErzGfcBoLg4)
* [Using Git and GitHub for Collaboration, Part 1 (Ariel Rokem, 2021)](https://www.youtube.com/watch?v=Lsmt2rHPJDU)
* [Using Git and GitHub for Collaboration, Part 2 (Ariel Rokem, 2021)](https://www.youtube.com/watch?v=j3IbFKksJkQ)

#### Introductory Python
* [Introduction to Programming in Python (Tal Yarkoni, 2020)](https://www.youtube.com/watch?v=5KgyMerXYz8)
* [Introduction to Programming in Python, Part 1 (Noah Benson, 2021)](https://www.youtube.com/watch?v=Swb-UptFRl4)
* [Introduction to Programming in Python, Part 2 (Noah Benson, 2021)](https://www.youtube.com/watch?v=ycGWr5Zy2A0)
* [Data Manipulation in Python (numpy/pandas) (Tal Yarkoni, 2020)](https://www.youtube.com/watch?v=EwCGCJk7YH0)
* [Creating Sharable Python Libraries (Ariel Rokem, 2020)](https://www.youtube.com/watch?v=ACycTncrJWA)

#### Advanced Python
* [Numerical Computing in Python (J.B. Poline, 2019)](https://www.youtube.com/watch?v=ZmNpURWhcZM)
* [Data Visualization (Kirstie Whitaker, 2020)](https://www.youtube.com/watch?v=uaKu5a6P3oU)
* [High Performance Computing (Ariel Rokem, 2020)](https://www.youtube.com/watch?v=4pCeUMOVfIs)
* [Parallelization with Python/dask (Ariel Rokem, 2022)](https://www.youtube.com/watch?v=7k4d_7F7dz4)

#### Machine Learning and AI
* [Introduction to Machine Learning (Tal Yarkoni, 2020)](https://www.youtube.com/watch?v=zvd8M8dwHxM)
* [Machine Learning with Scikit-Learn (Tal Yarkoni, 2019)](https://www.youtube.com/watch?v=epjZDEPRFsI)
* [Deep Learning (Ariel Rokem, 2019)](https://www.youtube.com/watch?v=nzJ7A1KevSk)
* [Introduction to PyTorch (Noah Benson, 2021)](https://www.youtube.com/watch?v=OCpmJ9LPMlc)
* [Deep Learning and CNNs (Noah Benson, 2022)](https://www.youtube.com/watch?v=RT7gI-VN4dE)

#### Docker
* [Docker (Chris Gorgolewsky, 2020)](https://www.youtube.com/watch?v=4s0vNSt-3j0)
* [Docker, Part 1 (Noah Benson, 2021)](https://www.youtube.com/watch?v=tewf5ZRZHkE)
* [Docker, Part 2 (Noah Benson, 2021)](https://www.youtube.com/watch?v=4zQfSBYdKFY)

#### Cloud Computing
* [Cloud Computing for Neuroimaging (Tara Madhyastha, Amanda Tan, and Ariel Rokem, 2020)](https://www.youtube.com/watch?v=X5XvkdE6vgU)
* [Cloud Computing (Naomi Alterman, 2022)](https://www.youtube.com/watch?v=qbRkD9tDHQE)

#### Neuroscience Tools and Data
* [Workflows/Nipype (Satra Ghosh, 2020)](https://www.youtube.com/watch?v=YjJ9-gxlRJk)
* [NiBabel: Neuroimaging data and file structures in Python (Chris Markiewicz, 2020)](https://www.youtube.com/watch?v=Y6ulmOlW1FI)
* [Nilearn (Elizabeth DuPre, 2020)](https://www.youtube.com/watch?v=ASEyg5nxj3A)
* [Nipreps (Oscar Esteban, 2020)](https://www.youtube.com/watch?v=J_ZwPN8gYpM)
* [Brain Imaging Data Structure (BIDS) (Kirstie Whitaker, 2020)](https://www.youtube.com/watch?v=XzfjxbTYQRM)
* [Working with multimodal data in the Brain Imaging Data Structure (BIDS) (Dora Hermes, 2024)](https://www.youtube.com/watch?v=kCqCfqweAAs)
* [Introduction to the Geometry and Structure of the Human Brain (Noah Benson, 2020)](https://www.youtube.com/watch?v=LRZwZAvdJgw)
* [Machine Learning for Neuroimaging (Elizabeth DuPre, 2023)](https://www.youtube.com/watch?v=shAmKXAfjW4)

