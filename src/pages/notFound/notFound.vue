<template>
    <div class="not-found-wrap">
        <div class="not-found">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMsAAAC/CAMAAABnltjWAAAAvVBMVEUAAADS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tL7+/vS0tLh4OD5+fn39/fZ2NjV1dXb29vd3d319fXz8/Pj4+Pm5ubs7Ozf39/u7u7p6enq6urw8PCFL1IBAAAALHRSTlMAcO7GQdnylhLLO9/m02FINJFpWgUunRjqwLd5JyFUTvjPoourfoQOpq8JddIM4IsAAAsDSURBVHja7NtrV6JAAMbxkSC8paabpqaZZmvlA8wMIOLl+3+sxdE1XSQ5+yJnPPxOlxO98d/gcJuIpIoTvNTJdZgg8ptcgw/AYiiSa5AXLTq5BlmLnLIWSfzudibmqFtvPBcfenmlW2pNHLkVLVFatRaVKaUPUJdzGmERRKjF8ZdWKnTuH4gS6gC1joRh9IVv07DTIAoYi5Qkosx1OdpEfiORco6LApFeA+BWmpYOkV4b1EqBY0Kkl3JcOO6J/HKpYii6RAFvgJuiRY3LzFGKGIo+UYIJGlrfUugqM4qh3HXD71qeiBp62GEsIQpoEVU0xmbnTsMetULKD5qAX0QtH096pbuNcimE7UC5MIiq2nCBZscY4K8cUZVoIZFWsf8ZDVTpkyhr23IdYi35Xq3aIyr6LVqKz5XPN3PSKRgahDeijMb98L1zc1fSEHEZjjDGoMS5smDiALU4Y4xSyjeHztDa4ICpxr3/OijfvvDQSuBSmErcjxmDWueEFHgm8suJlnOoEjeXGqIlRcwNkV4VzDrPVWJcamCpUkZEfq0ULa4ih5gPIEWKSZQwwNkZWZUUUkKYWCGeaDBlUkgBbvwG/yaBYcf8IIroHLaEFmfYeyy83uf6NaKMIbj1NRAhA26NTnNc0Xuq3bYgpIgvA1BAsSeVR960Qak9GdWfa/kc6NVcI2ctcspa5JS1yClrkVPWIqesRU5Zi5yyFjllLXLKWuSUtchJ3pZ8r6b3o3UH4vn9i2GUy4/ao3a7+RQ23wbYGAwG0eay8ShVy6+e3vg03wslTcN/kKOlpdfNdukwQMWWj1ru1bhFHBNL9GbBcr5Y+77neY5jiw/HFsS36Yb4yXG84JIt+cqwhCOUW8Fq4W9ft3itCextl+8vVstgZrmcc8oAvJBLqDYN7DE+W6098ceefs+OEvx5YLmUIW5QJT+uONGww2dzz3ZEwtkKfz7jDMkMnfy0+h0EFq4SMpz1cjZzDncpb2VRHLvVync3783RZ6Vf1YsPT70W+WnPBjZo4J3eofyZy7Cx2g/I3GUHCeXCcNzQny6/kqp2gwgLPGeagENg3NuOyILvK+6GdV2e5dM6ImweHxE/4IyJvoBxa7nwdkMSMAilYUWypZNFRAI7vl+52PCnx+zVtuQmJ99jyFYZYH4sxQ62E9ri3+2i8CUn5RP6McC8+KTFAczE9njKS5XIqQysT77ZuTeN8wFIu/S7B9D4e2UBWGLriV8U5Huf7FQAaxozBxMpMQ6Akqy7WEO0xGO8hJOWFSIFOf/n60nsY+nZC4aI9lqX5wC59ygOIenZzmx/yG9WHqRarmMmDsxqaSfULCn2Su9dXZbZ4AHAzD49/bLASRqceUjxRWu/6Zc/rySkkRBjc0Ss9TeXLsfn/OVOt3bpXe4eQHhqZBaihgb+d9di3iLgDHvGsHLRPa4JgHqnatYWNqh/Zjpw1odB5ddcj1zKeH+qHOOsOIAgxfxmO3+qO9OttmEgCotskIRslCwlLSGQUGiZyPsSO37/x+qREmdOC/XYRJbT71/PKcvNaK6tkWaIfBsz6G5dUYPrQm5hoo99y433W+PIdILEyBRkcHe3tTA+N7rXG24tzSTrsbkBgeUEkUsFCD2hOVkw7Sy6Uk3E/ynHxd/Qit7IDPLT+LReL3T79e1Fbb/tzygmGUm8F+TLf3pGdnzC43prP2vOnqv1DAROklne48khgUIA0w+z9bhx6ge9kR45GJsmCCzfE3IIQpDYQVaayfIT7Fmup0wngzrQcrBQAxJrQ9jBMXvaN0wn0+de+htGhkHuAXxMoEw53mYvp/XYYToZXzYhXUAeqcfdbexkL8zIjs4WJMuLW6aT4agHqIfOHoEP4IQ8U05o74Oju1d0Oq9Dih27tJ74kGiZi809pE69wzTTeTrqsbYhtdw835LCieBE5l5Ng+kG9ciTgOxzGb43YGuX7QSeg2q0s5g0IadZu7J2TkSQuxsQVNRjPb14neWTw3e2n6MIslfTZxXRECezeFpDwQk10qN7A1YRaNZ2SDlbAFuDyBtp0fMKywTfRulrW7YRbACskIhcaOEBbUU0Xh5AsHUz1MiM8KmF5pzBpMibJQg2WbERFVuHk6E5g9kkjToI4qzQyJMcytFMAFixiulINXZGhnOxzoikkf/pDIZ4NtpwOCXMOlB3KTHBWYhhfSEmKzIWwDZDBx7sTFjlNAi3igCAk2JigHOYsTjISBmBKc53KbgPAJUfH46XhPH64iINCbcBeqxaBjUgztbCfGdvhlXhKsNnTJidDx76GKG5dsX0gxUovINyKtwEWLNK+P7UBIFvvCkigUrmLE7XbcD3MUVwC2DM9DIcLQGwkq4M7mt6ycStcg32bPLUzSKsMdEk+t5kpv2X7rHClGQLwYe+nV+LATBj5TOe383ggInFC/qDBqeQlhorle9fLnsAgBXz3EkSCeEFbI4DtFhZTO9H7Rrq2IZukWTfCSlukeQvJy633/qTXgsA1xXGI68roZTK1tiPzsWqC4i53XmoIy+ujVvOvHgKWxlux18u5ZrCVRWjjELIisSm4FfGACMVS+r+6ev1nyNDdx72iBTFl1WNt7xgpWNxoorngwpsF4mIRgsKF6/RFPuqlopYYDAMzlW88vr8M68wL0pUbOPEOCkYdF2cdrFC4/t/jr+MylTBib0MUSVr53TaYf+yPitDBcJ3ZsbrF23I0GAEV53+pF0rUwUqIepHxHb/KTsWk+VfKjZCBaa3aiVW+MkvdwAevn+cF8enHjqt8CiMhVoOHT5WRqGcrsIOPvKoNC+wvdDDWJSAtwFCCQEPAWDOkKvF/PnuWpsKJAaBueNvp0hZYaFqJVQgNj71SscRPy96IyCkoB3f/JHdGAstJPbGO8k1AKA5xpusgm0QKHZa4o6FGSmpvqAUwR2ArWVFoZAtAFGXyG/GUEcprAWgVcjGAkl88rdyzb9PkQDgTRPGzsGLWKd/KoDtdNq1JHhlScHnsgV4t/3qArh6Fpl/uOqnYqkmclbB8N3QYoCgRAPjSeC7h5KEU2Bp0ReV1v8YWmzizUiVeLEjCxGK/UN8z9mAvafTPl6GUqmGSx17ApXfV1ac4HnKPqSxmoHEjFUtNs+xAEt9CpUYPnlzrHPZBYm9UyLHTEvIO1fp8ootyHOa33m8Jq6qUbhh4ATHC2Am6lCaKFAfshwsVi2QOBHnhWVYIEgO7oU6FMEjE4r1zX+p5zy6QnA2CnG/RYGS5j0rxE2ehgkkRB1OEJYjhYdSyfUNK8zVvIBPh9gMVg6c7/ZKfv387BF8DyQm+VIQxtikpxqcXnI9/6Gi/8NEn9YNd30QdE9vFulMCJ8uExyN0+szJQxWtSI+rX5xQXvA1IE+nWiTw70tCB4UNlbRPq0eHFrQnF+xEvjxq53KIXxaVZZAnVhcSvr0zKA0OUbaSdUttUMUmwtwe1DS2oL6gulgOOmmPq1UDhcd/5KeyiyheyVU+zQ3woOQ2WTINHP/+gASvEF1SrY7IHlY3bNK6Kc+TW8P8nVQ1/usOn5etPGx8ynXOuYI1PGNqyqm6+VnfdpwYzMVMj+HgTef9GnOPf8o5Lzm3g0nRco4Bs6AqL322fnReJzl2R5w7gZpQK5fzvdP6i5WD5A598Iwos1xKMfo3P9S4Ac+jRlyDEjr9QxnXH44xaP+3qfFVBEcYlN5300BrlKftkLPEEIC6zgsaX5mw1Pzl3EQmSEd9p8yvuyiju7jfeWP9RNTZyWu1zx0NQ1D+Q1zA2UhfaMJWAAAAABJRU5ErkJggg==" alt="">
            <p>（T ^ T）抱歉，迷路了'</p>
            <router-link :to='{name:"home"}'>返回首页</router-link>
        </div>
    </div>
    
</template>

<script>

export default {
    
}
</script>

<style lang="scss">
    .not-found-wrap{
        width: 100%;
        height: 17.786667rem;
        background: #efefef;
        overflow: hidden;
    }
    .not-found{
        text-align: center;
        width: 5.333333rem;
        height: 7.626667rem;
        margin: auto;
        margin-top: 4rem;
        p{
            margin: 25px auto;
            font-size: .453333rem;
        }
    }
</style>
