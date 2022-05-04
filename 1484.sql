# create table `Activities`
# (
#   `sell_date` datetime     not null,
#   `product`   varchar(100) not null
#   # プライマリーキーはないって設定らしい
# );

# insert into `Activities`
# values ('2020-05-30', 'Headphone')
#      , ('2020-06-01', 'Pencil')
#      , ('2020-06-02', 'Mask')
#      , ('2020-05-30', 'Basketball')
#      , ('2020-06-01', 'Bible')
#      , ('2020-06-02', 'Mask')
#      , ('2020-05-30', 'T-Shirt')
# ;

select sell_date
     , count(distinct (product))                                     as num_sold
     , group_concat(distinct product order by product separator ',') as products
from Activities
group by sell_date
order by sell_date
;
