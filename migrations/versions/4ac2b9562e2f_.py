"""empty message

Revision ID: 4ac2b9562e2f
Revises: 10f60951c75e
Create Date: 2023-05-07 07:24:14.552902

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4ac2b9562e2f'
down_revision = '10f60951c75e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('message', schema=None) as batch_op:
        batch_op.add_column(sa.Column('text', sa.String(length=250), nullable=True))
        batch_op.drop_column('message')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('message', schema=None) as batch_op:
        batch_op.add_column(sa.Column('message', sa.VARCHAR(length=250), autoincrement=False, nullable=True))
        batch_op.drop_column('text')

    # ### end Alembic commands ###
