"""Welcome to Reflex! This file outlines the steps to create a basic app."""
from rxconfig import config

import reflex as rx

docs_url = "https://reflex.dev/docs/getting-started/introduction"
filename = f"{config.app_name}/{config.app_name}.py"


class State(rx.State):
    """The app state."""

    pass


def get_button(button_text, img_src, href_url):
    return rx.link(
        rx.hstack(
            rx.image(
                src=img_src,
                width='30px',
            ),
            rx.text(
                button_text,
                font_weight='500',
                font_size='20px',
                # font_family='DM Sans',
                            text_align='center',
                            color='#57618A',
                            width='calc(100% - 80px)'
            ),
            padding='9px 7px',
            width='95vw',
            max_width='700px',
            border='1px solid rgb(128, 160, 201)',
            border_radius='5px',
            bg='white',
            box_shadow='rgb(128 160 201) 8px 8px 0px 0px',

            _hover={
                'cursor': 'pointer',
                'translate': '4px 4px',
                'box_shadow': 'rgb(128 160 201) 4px 4px 0px 0px'
            },
        ),
        href=href_url,
        _hover={},
    )


def get_social_media_button(image_path, href_url):
    return rx.link(
        rx.image(
            src=image_path,
            width='60px',
            _hover={
                'cursor': 'pointer',
                'transform': 'scale(1.1)',
            },
        ),
        href=href_url,
    )


def index() -> rx.Component:
    return rx.box(
        rx.center(
            rx.vstack(
                rx.vstack(
                    rx.image(
                        src='21.jpg',
                        width='128px',
                        height='128px',
                        border_radius="50%",
                        margin_bottom='8px'
                    ),
                ),
                rx.text(
                    "Mihir Pesswani",
                    font_weight='700',
                    font_size='36px',
                    line_height='1.5em',
                    # font_family='DM Sans',
                    width='100%',
                    text_align='center',
                    color='rgb(255, 255, 255)',
                    padding_bottom='3px',
                ),
                rx.text(
                    "Software Engineer and a Data Scientist",
                    font_weight='500',
                    font_size='18px',
                    # font_family='DM Sans',
                    width='100%',
                    text_align='center',
                    color='rgb(255, 255, 255)',
                    padding_bottom='30px',
                ),


                rx.vstack(
                    get_button(
                        'Github',
                        'Mihir1.jpeg',
                        'https://github.com',
                    ),
                    get_button(
                        'LinkedIn',
                        'Mihir1.jpeg',
                        'https://github.com',
                    ),
                    get_button(
                        'Website',
                        'Mihir1.jpeg',
                        'https://github.com',
                    ),
                    rx.hstack(
                        get_social_media_button(
                            'Mihir1.jpeg',
                            'https://twitter.com',
                        ),
                        get_social_media_button(
                            'Mihir1.jpeg',
                            'https://twitter.com',
                        ),
                        get_social_media_button(
                            'Mihir1.jpeg',
                            'https://twitter.com',
                        ),
                        get_social_media_button(
                            'Mihir1.jpeg',
                            'https://twitter.com',
                        ),
                        get_social_media_button(
                            'Mihir1.jpeg',
                            'https://twitter.com',
                        ),
                        get_social_media_button(
                            'Mihir1.jpeg',
                            'https://twitter.com',
                        ),
                    ),
                    spacing='0.9em',
                ),
                spacing='0',
            ),
            padding_top='36px',
            width='100vw',
        ),
        bg='linear-gradient(160deg, rgba(103, 151, 193, 255), rgba(255, 156, 162, 255))',
        width='100vw',
        height='100vh',
    )


# Add state and page to the app.
app = rx.App()
app.add_page(index)
app.compile()
