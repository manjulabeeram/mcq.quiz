from django.db import models
import uuid

class BaseModel(models.Model):
   uid =models.UUIDField(primary_key=True , default=uuid.uuid4 , editable=False)
   created_at = models.DateField(auto_now_add=True)
   updated_at = models.DateField(auto_now=True) 

   class Meta:
    abstract = True
# Create your models here.
class Category(BaseModel):
   category_name = models.CharField(max_length=100)
   def __str__(self) -> str:
    return self.category_name

class Question(BaseModel):
 category = models.ForeignKey(Category , related_name='category', on_delete=models.CASCADE)
 question = models.CharField(max_length=100)
 marks = models.IntegerField(default=5)
def __str__(self) -> str:
    return self.question


class Answer(BaseModel):
  question = models.ForeignKey(Question , related_name='question_answer' , on_delete=models.CASCADE)
  answer = models.CharField(max_length=100)
  is_correct = models.BooleanField(default=False)
  def __str__(self) -> str:
    return self.answer
